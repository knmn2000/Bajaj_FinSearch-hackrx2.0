const express = require('express');
const server = express();
const PORT = 3000;
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'http://localhost:9200',
});

server.get('/autosuggest/:slug', async (req, res) => {
  var keywords = req.params.slug;
  await client
    .search({
      index: 'bajajfinsearch',
      body: {
        suggest: {
          suggestion: {
            text: keywords,
            term: {
              field: 'text',
            },
          },
        },
      },
    })
    .then((response) => {
      var result = [];
      response['body']['suggest']['suggestion'].forEach((suggestion) => {
        suggestionKeyword = suggestion['options'][0];
        if (suggestionKeyword) {
          result.push(suggestionKeyword['text']);
        } else {
        }
      });

      console.log(result);
    });
});
// Returning queried results
server.get('/:slug', async (req, res) => {
  const searchText = req.params.slug;
  var fieldsArray;
  var keywords = searchText.split(' ');
  if (keywords.length > 3) {
    fieldsArray = ['heading', 'text'];
  } else {
    fieldsArray = ['heading'];
  }
  const result = await client.search(
    {
      index: 'bajajfinsearch',
      size: 8,
      body: {
        query: {
          multi_match: {
            query: searchText,
            fields: fieldsArray,
            fuzziness: 'AUTO',
            type: 'most_fields',
          },
        },
      },
    },
    {
      ignore: [404],
      maxRetries: 3,
    }
  );
  // getting sponsored results
  const resultSponsored = await client.search(
    {
      index: 'bajajfinsearchsponsored',
      size: 8,
      body: {
        query: {
          multi_match: {
            query: searchText,
            fields: fieldsArray,
            fuzziness: 'AUTO',
            type: 'most_fields',
          },
        },
      },
    },
    {
      ignore: [404],
      maxRetries: 3,
    }
  );
  // Updating count for queried results for analysis on kibana
  result['body']['hits']['hits'].forEach(async (res) => {
    var newCount = res['_source']['count'] ? res['_source']['count'] : 0;
    await client.update({
      index: 'bajajfinsearch',
      id: res['_id'],
      body: {
        doc: {
          count: newCount + 1,
        },
      },
    });
  });
  return res.send([result, resultSponsored]);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

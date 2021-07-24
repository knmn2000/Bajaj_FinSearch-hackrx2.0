const express = require('express');
const server = express();
const PORT = 3000;
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'http://localhost:9200',
});

// Returning queried results
server.get('/:slug/:autosuggest', async (req, res) => {
  const searchText = req.params.slug;
  const autosuggest = req.params.autosuggest === 'true' ? true : false;
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
      size: autosuggest ? 3 : 8,
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
      size: 2,
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

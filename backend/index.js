const express = require('express');
const server = express();
const request = require('request');
const PORT = 3000;
const { Client } = require('@elastic/elasticsearch');
const e = require('express');

const client = new Client({
  node: 'http://localhost:9200',
});

// you need to do this step only one time to load the Dictionary
// Homme page
var refinedQuery = [];
server.get('/:slug', async (req, res) => {
  const searchText = req.params.slug;
  var keywords = searchText.split(' ');
  //   refinedQuery = [''];
  //   keywords.map(async (keyword, index) => {
  //     await client
  //       .search({
  //         index: 'bajajfinsearch',
  //         body: {
  //           suggest: {
  //             mytermsuggester: {
  //               text: keyword,
  //               term: {
  //                 field: 'text',
  //               },
  //             },
  //           },
  //         },
  //       })
  //       .then((suggestion) => {
  //         const response = suggestion.body.suggest.mytermsuggester[0].options[0];
  //         if (response) {
  //           refinedQuery.push(response['text']);
  //         } else {
  //           refinedQuery.push(keyword);
  //         }
  //         console.log(refinedQuery);
  //       });
  //   });
  //   console.log(refinedQuery);
  var fieldsArray;
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
          },
        },
      },
    },
    {
      ignore: [404],
      maxRetries: 3,
    }
  );
  console.log(result);
  return res.send(result);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

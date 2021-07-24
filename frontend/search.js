const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const esroute = 'http://localhost:3000/';
var http = new XMLHttpRequest();

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }
function truncateString(str, num) {
  if (num > str.length) {
    return str;
  } else {
    str = str.substring(0, num);
    return str + '...';
  }
}

const getResults = () => {
  const query = document.getElementById('mysearch').value;
  const url = esroute + query;
  // const response = Object($.get(url));
  var response;
  var timeTaken;
  http.open('GET', url);
  http.send();
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && http.status == 200) {
      try {
        console.log(JSON.parse(http.responseText)[0]);
        response = JSON.parse(http.responseText)[0];
        responseSponsored = JSON.parse(http.responseText)[1];
        timeTaken = response['body']['took'];
        document.getElementById(
          'time'
        ).innerHTML = `Fetched results in ${timeTaken}ms`;
        responseSponsored = responseSponsored['body']['hits']['hits'][0];
        if (responseSponsored) {
          document
            .getElementById('searchresults')
            .appendChild(
              createResultCard(
                responseSponsored['_source']['heading'],
                truncateString(responseSponsored['_source']['text'], 100),
                responseSponsored['_source']['source'],
                true
              )
            );
        }
        // const finalResponse = responseSponsored['body']['hits']['hits'].concat(
        //   response['body']['hits']['hits']
        // );
        response['body']['hits']['hits'].forEach((card) => {
          // finalResponse.forEach((card) => {
          var header = card['_source']['heading'];
          var text = truncateString(card['_source']['text'], 100);
          var source = card['_source']['source'];
          document
            .getElementById('searchresults')
            .appendChild(createResultCard(header, text, source));
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  // const response = console.log(response['responseJSON']);
  // document
  //   .getElementById('searchresults')
  //   .appendChild(createResultCard('1', '2'));
};

var mysearch = document.getElementById('searchicon');
mysearch.addEventListener('click', function () {
  document.getElementById('searchresults').innerHTML = '';
  getResults();
});

function createResultCard(header, text, source, sponsored = false) {
  var z = document.createElement('div');
  z.innerHTML = `<div class="wiki-search-results ${
    sponsored ? 'sponsored' : ''
  }">
       ${sponsored ? "<div class='sponsoredtext'>Promoted</div>" : ''}
       <a href="${source}" target="_blank"> <div class='header'>
            ${header}
        </div></a>
        <div class='resulttext'>
            ${text}
        </div>
        <!-- <div class='source'>
            
        </div> -->
        
    </div>`;
  return z;
}

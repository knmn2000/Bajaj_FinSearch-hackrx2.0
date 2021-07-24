const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const esroute = 'http://localhost:3000/';
var http = new XMLHttpRequest();

// UTILITY FUNCTIONS
// ##
function truncateString(str, num) {
  if (num > str.length) {
    return str;
  } else {
    str = str.substring(0, num);
    return str + '...';
  }
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// ##

const getResults = () => {
  document.getElementById('searchresults').innerHTML = '';
  const query = document.getElementById('mysearch').value;
  const url = esroute + query + '/false';
  var response;
  var timeTaken;
  http.open('GET', url);
  http.send();
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && http.status == 200) {
      try {
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
        response['body']['hits']['hits'].forEach((card) => {
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
};

var mysearch = document.getElementById('searchicon');
mysearch.addEventListener('click', function () {
  getResults();
});

function createResultCard(header, text, source, sponsored = false) {
  var z = document.createElement('div');
  z.innerHTML = `<div class="bajaj-search-results ${
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
function createResultSuggestion(header) {
  var z = document.createElement('div');
  z.innerHTML = `<div class="suggestion" onclick="getResults();">
        <div class='suggestionheader'>
            ${header}
        </div>
    </div>`;
  return z;
}

var autoSuggest = debounce(function () {
  document.getElementById('searchresults').innerHTML = '';
  const query = document.getElementById('mysearch').value;
  const url = esroute + query + '/true';
  http.open('GET', url);
  http.send();
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && http.status == 200) {
      try {
        response = JSON.parse(http.responseText)[0];
        response['body']['hits']['hits'].forEach((card) => {
          var header = card['_source']['heading'];
          document
            .getElementById('searchresults')
            .appendChild(createResultSuggestion(header));
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
}, 250);

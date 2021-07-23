const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const esroute = 'http://localhost:3000/';
var xhttp = new XMLHttpRequest();

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

function success(text) {
  console.log('hogaya');
  console.log(text);
}
function getResults() {
  const query = document.getElementById('mysearch').value;
  const url = esroute + query;
  console.log($.get(url));
}

// #
//   #

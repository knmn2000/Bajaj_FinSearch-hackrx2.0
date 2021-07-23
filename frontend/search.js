const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
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

function getResults() {
  console.log(document.getElementById('mysearch').value);
  // TODO: GET REQUEST
}

// #
// var query = {
//   query: {
//     multi_match: {
//       query: 'travel insurance',
//       fields: ['heading', 'text'],
//     },
//   },
// };
//   #

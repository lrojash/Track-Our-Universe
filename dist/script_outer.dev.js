"use strict";

document.body.style.zoom = "25%";
var API_KEY = 'TW2hym5fprpzfSEc15t1hI9zu59tLvI8tbCG22Zy';
var API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/';
var API_NASA = "https://api.nasa.gov/planetary/apod?api_key=".concat(API_KEY); // get data from API

var getSolar = function getSolar(event) {
  var planet, response;
  return regeneratorRuntime.async(function getSolar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          planet = event.target.id.toString();
          _context.next = 4;
          return regeneratorRuntime.awrap(axios.get(API_URL_SOLAR_DATA));

        case 4:
          response = _context.sent;
          displayData(getPlanetData(response, planet));
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; // matches the name of the planet with the body from 
// the api


var getPlanetData = function getPlanetData(data, name) {
  var planets = data.data.bodies;

  for (var i = 0; i < planets.length; i++) {
    if (planets[i].englishName === name) {
      return planets[i];
    }
  }
};

var displayData = function displayData(planet) {
  document.querySelector('.information').innerText = "";
  var display = document.querySelector('.information');
  var resultWrapper = document.createElement('div');
  resultWrapper.className = 'info-result';
  var textInfo = document.createElement('h2');
  textInfo.className = 'info';
  textInfo.innerText = planet.englishName;
  resultWrapper.appendChild(textInfo);
  display.appendChild(resultWrapper);
}; // create the list of objects to be displayed
// queries


var jupiter = document.querySelector('#Jupiter');
var saturn = document.querySelector('#Saturn');
var uranus = document.querySelector('#Uranus');
var neptune = document.querySelector('#Neptune');
var box = document.querySelector('.information'); // Event Listener
// outer

jupiter.addEventListener('click', getSolar);
saturn.addEventListener('click', getSolar);
uranus.addEventListener('click', getSolar);
neptune.addEventListener('click', getSolar);
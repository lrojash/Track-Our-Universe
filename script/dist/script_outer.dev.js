"use strict";

document.body.style.zoom = "100%";
var API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'; // get data from API

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
  textInfo.className = 'planet';
  textInfo.innerText = planet.englishName;
  var listInfo = document.createElement('li');
  listInfo.className = 'planet-info';
  listInfo.innerText = "Gravity: ".concat(planet.gravity, "(m/s^2) \n                        Mean Radius: ").concat(planet.meanRadius, "(km) \n                        Number of Moons: ").concat(planet.moons.length, " \n                        Escape Velocity: ").concat(planet.escape, "(m/s)\n                        Orbit: ").concat(planet.sideralOrbit, "(Earth Days)\n                        Rotation: ").concat(planet.sideralRotation, "(hours)");
  textInfo.appendChild(listInfo);
  resultWrapper.appendChild(textInfo);
  display.appendChild(resultWrapper);
};

var body = document.querySelector('body'); // will create stars

var createStars = function createStars() {
  for (var i = 0; i < 250; i++) {
    setTimeout(function () {
      var star = document.createElement('div');
      star.className = 'stars';
      positionStar(star);
      body.appendChild(star);
    }, 4000);
  }
}; // will position the elements at random location


var positionStar = function positionStar(star) {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  star.style.left = x + '%';
  star.style.top = y + '%';
};

createStars();
var button = document.getElementById('stop');
button.addEventListener('click', function () {
  var animation = document.getElementsByClassName('stars');
  console.log(animation);

  for (var i = 0; i < animation.length; i++) {
    animation[i].remove('stars');
  }
}); // queries

var jupiter = document.querySelector('#Jupiter');
var saturn = document.querySelector('#Saturn');
var uranus = document.querySelector('#Uranus');
var neptune = document.querySelector('#Neptune'); // Event Listener
// outer

jupiter.addEventListener('click', getSolar);
saturn.addEventListener('click', getSolar);
uranus.addEventListener('click', getSolar);
neptune.addEventListener('click', getSolar);
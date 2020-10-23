"use strict";

document.body.style.zoom = "100%";
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
});
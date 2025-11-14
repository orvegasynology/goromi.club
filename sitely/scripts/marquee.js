const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
let scrollInterval;

buttonRight.onmousedown = function () {
  scrollInterval = setInterval(function () {
    document.getElementById('marqueeContent').scrollLeft += 1;
  }, 1);
};

buttonRight.onmouseup = function () {
  clearInterval(scrollInterval);
};

buttonLeft.onmousedown = function () {
  scrollInterval = setInterval(function () {
    document.getElementById('marqueeContent').scrollLeft -= 1;
  }, 1);
};

buttonLeft.onmouseup = function () {
  clearInterval(scrollInterval);
};

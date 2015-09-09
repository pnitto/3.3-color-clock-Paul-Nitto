function timePerSecond() {
  var timePast = 1000;
  var time = setTimeout('clock()', timePast);
  console.log(time);
}
function clock() {
  var clock = new Date();
  console.log(clock);
  document.querySelector('.js-clock').textContent = clock;
  var everySecond = timePerSecond();
}

  //var currentTime = new Date();
//  console.log(currentTime);
//document.querySelector('.js-clock').textContent = currentTime;

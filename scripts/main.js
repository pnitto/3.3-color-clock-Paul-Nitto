
function timePerSecond() {
 var timePast = 1000;
 var time = setTimeout('clock()', timePast);
 //console.log(time);
}

function clock() {
  var clock = new Date();
  var seconds = clock.getSeconds();
  //console.log(seconds);
  var minutes = clock.getMinutes();
  //console.log(minutes);
  var hours = clock.getHours();
  //console.log(hours);

  if(hours <= 9) hours = '0'+ hours;
  if(minutes <= 9) minutes = '0'+ minutes;
  if(seconds <= 9) seconds = '0'+ seconds;
  var totalTime = hours + ":" + minutes + ":" + seconds
  var color = "#" + hours + minutes + seconds;
  document.body.style.background = color;
  document.getElementById('body').innerHTML = color;

  var everySecond = timePerSecond();
  var secondPercent = Math.round((seconds / 60) * 100);
  console.log(secondPercent);

  var progressbar = document.querySelector('#progress-bar');
  console.log(progressbar);
  progressbar.style.width = secondPercent + '%';

  document.querySelector('.js-second-percent').textContent = secondPercent;
  document.querySelector('.js-clock').textContent = totalTime;
  console.log(clock);
}

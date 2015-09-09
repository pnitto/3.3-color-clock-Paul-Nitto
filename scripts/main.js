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
  //if(hours <= 9) hr = '0'+ hours;
	//if(minutes <= 9) ms = '0'+ minutes;
	//if(seconds <= 9) s = '0'+ seconds;

  //color = "#" + hours + minutes + seconds;
  //document.body.style.background = color;
  //document.getElementById('body').innerHTML = color;
  var everySecond = timePerSecond();

  var secondPercent = Math.round((seconds / 60) * 100);

  var progressbar = document.querySelector('#progress-bar');
  progressbar.style.width = secondPercent + '%';

  document.querySelector('.js-second-percent').textContent = secondPercent;
  //console.log(secondPercent);
  //console.log(seconds);
  //console.log(clock);
  document.querySelector('.js-clock').textContent = clock;
}




// Stuff not needed //
//function secondPercent() {
//  var currentTime = clock();
//}
  //var currentTime = new Date();
//  console.log(currentTime);
//document.querySelector('.js-clock').textContent = currentTime;

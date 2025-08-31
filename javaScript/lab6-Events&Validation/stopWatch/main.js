var start = document.querySelector('.btn.start');
var stop = document.querySelector('.btn.stop');
var reset = document.querySelector('.btn.reset');

var result = document.getElementsByClassName('result')[0];

//glocal varibels
var timer = null;
var milli = 0;


//for info, i didn't build this fucntion alone, i search for it
function formatTime(ms) {
  var hrs = Math.floor(ms / 3600000);
  var mins = Math.floor((ms % 3600000) / 60000);
  var secs = Math.floor((ms % 60000) / 1000);
  var millis = ms % 1000;
  
  return (
    String(hrs).padStart(2, "0") + " : " +
    String(mins).padStart(2, "0") + " : " +
    String(secs).padStart(2, "0") + " : " +
    String(millis).padStart(3, "0")
  );
}





function startT(){
  if (timer != null) return;
  var startTime = Date.now() - milli;

  timer = setInterval(function () {
    milli = Date.now() - startTime;
    result.textContent = formatTime(milli);
  }, 10); 
}
function stopT(){
 clearInterval(timer);
  timer = null;
}
function resetT(){
 clearInterval(timer);
  timer = null;
  milli = 0;
  result.textContent = "00 : 00 : 00 : 000";
}













//events
start.addEventListener('click',startT);
stop.addEventListener('click',stopT);
reset.addEventListener('click',resetT);
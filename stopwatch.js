 function stopWatch(){
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var start = document.getElementById('start');
    var reset = document.getElementById('reset');
    var stop = document.getElementById('stop');
    var interval ;
    start.addEventListener('click',function(){
        interval = setInterval(startTimer,10);
    })
    stop.addEventListener('click',function(){
        clearInterval(interval);
    })
    reset.addEventListener('click',function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
     	appendSeconds.innerHTML = seconds;
    })

    function startTimer () {
        tens++; 
        
        if(tens <= 9){
          appendTens.innerText = "0" + tens;
        }
        
        if (tens > 9){
          appendTens.innerText = tens;
          
        } 
        
        if (tens > 99) {
          console.log("seconds");
          seconds++;
          appendSeconds.innerText = "0" + seconds;
          tens = 0;
          appendTens.innerText = "0" + 0;
        }
        
        if (seconds > 9){
          appendSeconds.innerText = seconds;
        }
      
      }
}
stopWatch();

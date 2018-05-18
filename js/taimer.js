window.onload = function(){ 
 
    function chet(){
 
        var hour = document.getElementById('hour').innerHTML;
        var minute = document.getElementById('minute').innerHTML;
        var second = document.getElementById('second').innerHTML;
        var day = document.getElementById('day').innerHTML;
        var end = false;
         
        if( second > 0 ) second--;
        else{
            second = 59;
             
            if( minute > 0 ) minute--;
            else{
                minute = 59;
                 
                if( hour > 0 ) hour--;
                else {
                     hour = 23;
                      
                      if( day > 0 ) day--;
                      else end = true;
                }
            }
        }
 
        if(end){
            clearInterval(intervalID);
            alert("ЧЕМПИОНАТ НАЧАЛСЯ!");
        }else{
            document.getElementById('day').innerHTML = day;
            document.getElementById('hour').innerHTML = hour;
            document.getElementById('minute').innerHTML = minute;
            document.getElementById('second').innerHTML = second;
        }
    }
    window.intervalID = setInterval(chet, 1000);
}
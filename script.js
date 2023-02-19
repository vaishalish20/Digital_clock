function showTime(){
    var date=new Date();
    var hr=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var session="AM";

    if(hr==0){
        hr==12;
    }
    if(hr>12){
        hr=hr-12;
        session="PM";
    }
    hr=(hr<10)?"0"+ hr : hr;
    min=(min<10)?"0"+ min : min;
    sec=(sec<10)?"0"+ sec : sec;


    document.getElementById("Digital_Clock").innerHTML= hr +":" + min + ":" + sec + session;
    setTimeout(showTime,1000);
    }
    showTime();
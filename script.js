
const hourEl=document.getElementById("hours");

const minuteEl=document.getElementById("minutes");

const secEl=document.getElementById("seconds");

const ampmEl=document.getElementById("ampm");


//To get the data from our computer 
//using date constructor 

function updateclock(){

    //h,m,s will get the current hour,min,second from the computer 
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm="am";

    if(h>12)
    {
        h=h-12;
        ampm="pm";
    }

    h = h < 10 ? "0" + h : h;
    m = m< 10 ? "0" + m:m;
    s= s<10? "0" +s:s;



    hourEl.innerText = h;
    minuteEl.innerText = m;
    secEl.innerText = s; 
    ampmEl.innerText = ampm;

   /*to update this function every seconds,
    we'll use here a setTimer method,
    this method execute in every amount of time what was setted , here it is 1s*/

    setTimeout(()=>{

        updateclock();

    },1000);
    //1s = 1000 ms, every 1s , this function will be called to update the time

    

}

updateclock();


/*
How It Gets the Current Time from Your Computer

The function uses JavaScript’s built-in Date object, which pulls the current date and time from your 
computer’s system clock. Each time new Date() is called, it fetches the current date and time, 
allowing this function to update every second with accurate information based on your local 
device’s time settings.
*/











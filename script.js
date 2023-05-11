conter=document.getElementById("counter");
startBtn=document.getElementById('start');
stopBtn=document.getElementById('pause');
resetBtn=document.getElementById('reset');

let interval;
let minutes= 25;
let seconds=0;
startBtn.addEventListener('click',()=>{
    interval=setInterval(()=>{
        seconds--;
        if(seconds<0){
            seconds=59;
            minutes--;
        }
        if(minutes<0){
            resetBtn.click();
            alert('Take a break!')
        }
        counter.innerHTML=` ${minutes}:${seconds}`;
    },1000);
    startBtn.disabled=true;
});
stopBtn.addEventListener('click',()=>{
    clearInterval(interval);
    startBtn.disabled=false;
})

resetBtn.addEventListener('click',()=>{
    minutes=25;
    seconds=0;
    counter.innerHTML=`${minutes}:00`;
    clearInterval(interval);
    startBtn.disabled=false;

})
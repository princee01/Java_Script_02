const clock = document.querySelector("#clock");
// or
// const clock=document.getElementById('clock')


setInterval(function () {
    let date = new Date;
    clock.innerHTML=date.toLocaleTimeString()
},1000)
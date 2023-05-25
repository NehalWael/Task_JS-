var img =document.getElementById("myImg");
var bd = document.getElementById("demo");
var btn = document.getElementById("btn");


function turnOn(){
    img.src = "images/pic_bulbon.gif";
    bd.style.backgroundColor = "#434"
}

function turnOff(){
    img.src = "images/pic_bulboff.gif";
    bd.style.backgroundColor = "#09c"
}

function turn(){
    if(btn.innerHTML == 'on')
    {
        img.src ="images/pic_bulbon.gif";
        bd.style.backgroundColor = "red";
        btn.innerHTML = 'off'
    }

    else
    {
        img.src = "images/pic_bulboff.gif";
        bd.style.backgroundColor = "#323";
        btn.innerHTML == 'on'
    }
}
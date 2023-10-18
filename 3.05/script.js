//var p = document.getElementById("changeMe");
var p = document.querySelector("#changeMe");

p.innerHTML = "wee";
p.style.background = "white";
p.style.color = "grey";
p.style.textAlign = "center";

document.body.style.backgroundColor = "black";

function changeBG()
{
    document.body.style.backgroundColor = "lightblue";
}

function changePara()
{
    p.style.color="white";
    p.style.background = "pink";

}

document.onclick = changeBG;
p.onclick = changePara

var currentMargin = 0;
function nextFrame()
{
    currentMargin ++;
    p.style.margin = currentMargin + "px";
}

function nextFrameTwo()
{
    currentText = p.innerHTML;
    p.innerHTML = currentText + "e";
}

var animation;

function play()
{
    animation = setInterval(nextFrame,20);
    animation = setInterval(nextFrameTwo,100);
}

//play();
document.querySelector("#play").onclick = play;

function stop()
{
    currentMargin = 0;
    p.style.margin = "0px";
    p.innerHTML = "wee";
    // p.style.background = "white";
    // p.style.color = "grey";
    clearInterval(animation);
    
}

document.querySelector("#stop").onclick = stop;
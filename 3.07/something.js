
var currentMargin = 0;
function nextFrame()
{
    currentMargin ++;
    p.style.margin = currentMargin + "1px";
}

var animation;
function play()
{
    animation = setInterval(nextFrame,20);
}
play();
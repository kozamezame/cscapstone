var p = document.querySelector("haha");

p.innerHTML = "wee";

function nextFrameTwo()
{
    currentText = p.innerHTML;
    p.innerHTML = currentText + "e";
}

nextFrameTwo;
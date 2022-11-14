const ref = {
    body: document.querySelector("body"),
    start: document.querySelector("button[data-start]"),
    stop: document.querySelector("button[data-stop]"),
}

ref.start.addEventListener("click", onStartClick);
ref.stop.addEventListener("click", onStopClick);
let idInt;
ref.stop.disabled = false;

function onStartClick() {
    ref.stop.disabled = false;
    ref.start.disabled = true;
    idInt = setInterval(() => {
        const backColor = getRandomHexColor();
        ref.body.style.background = backColor;
        
    }, 1000)
}

function onStopClick() {
    ref.start.disabled = false;
    ref.stop.disabled = true;
    clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

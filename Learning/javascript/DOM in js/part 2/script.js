let btns = document.querySelectorAll("button");


for (btn of btns) {
    btn.onclick = notify;
    btn.onmouseenter = mouse;
}

function notify() {
    alert("Button was clicked");
    console.log("Button was clicked");
}

function mouse() {
    console.log("Mouse is over the button");
}
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSizeChange = (() => {
    text.style = `font-size:${fontSizeControl.value}px`;
});

fontSizeControl.addEventListener("click", fontSizeChange);
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style = `font-size:${fontSizeControl.value}px`;

const fontSizeChange = (() => {
    text.style = `font-size:${fontSizeControl.value}px`;
});

fontSizeControl.addEventListener("input", fontSizeChange);
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(fontSizeControl);
console.log(text);

const fontSizeChange = (event => {
    console.log(fontSizeControl.value);
});


fontSizeControl.addEventListener("click", fontSizeChange);
console.log(text);
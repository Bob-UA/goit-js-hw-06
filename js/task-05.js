const inputField = document.querySelector("#name-input");
console.log(inputField);

const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

inputField.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value;
});
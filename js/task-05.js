const inputField = document.querySelector("#name-input");
console.log(inputField);

const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

inputField.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === 0) {
     return nameOutput.textContent = "Anonymus";
    }    
nameOutput.textContent = event.currentTarget.value;
  
  
});


const input = document.querySelector("#validation-input");

const checkInputValue = value => {
    const inputValueForValidation = +value.srcElement.dataset.length;
    const inputValue = input.value.length;
    
    inputValue === inputValueForValidation
      ? (input.className = "valid")
      : (input.className = "invalid");
};


input.addEventListener("blur", checkInputValue);
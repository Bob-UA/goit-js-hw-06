let counterValue = document.querySelector("#value");
let value = +counterValue.textContent;
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const btnDecrement = document.querySelector(`[data-action="decrement"]`);

counterValue.textContent = value;

const increment = () => {
  counterValue.textContent = value += 1;
};

const decrement = () => {
  counterValue.textContent = value -= 1;
};

btnIncrement.addEventListener("click", increment);

btnDecrement.addEventListener("click", decrement);
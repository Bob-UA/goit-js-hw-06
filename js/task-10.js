function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

function createBoxes(amount) {
  console.log(amount);
};

function takeValue() {
  input.addEventListener("input", createBoxes(input.value))
}

createButton.addEventListener("click", takeValue);

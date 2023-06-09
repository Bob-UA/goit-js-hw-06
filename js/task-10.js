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
  const container = [];
  for (let i = boxes.childNodes.length + 1; i <= amount; i++) {
    container.push(`<div style="width: ${20 + 10 * i}px; height: ${20 + 10 * i}px;background-color:${getRandomHexColor()}";></div>`);
  }
    boxes.insertAdjacentHTML("beforeend", container.join(""));
  
};
function destroyBoxes() {
  boxes.innerHTML = "";
};


createButton.addEventListener("click", onCreateButton);
destroyButton.addEventListener("click", onDestroyButton);

function onCreateButton(event) {
  createBoxes(input.value);
}

function onDestroyButton() {
  destroyBoxes();
}
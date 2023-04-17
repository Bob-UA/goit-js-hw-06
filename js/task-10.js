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
  const container = [];
  for (let i = boxes.childNodes.length + 1; i <= amount; i++) {
    console.log(i);
    container.push(`<div style="width: ${20 + 10 * i}px; height: ${20 + 10 * i}px;background-color:${getRandomHexColor()}";></div>`);
    
  
  
  }
    boxes.insertAdjacentHTML("beforeend", container.join(""));
    console.log(boxes);
  
};


function takeValue() {
  input.addEventListener("input", createBoxes(input.value))
}

createButton.addEventListener("click", takeValue);
    

console.log(boxes);

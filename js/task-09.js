function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    body.style.backgroundColor = `${randomColor}`;
    color.textContent = `${randomColor}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

button.addEventListener("click", getRandomHexColor);



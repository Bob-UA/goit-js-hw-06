function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

button.addEventListener("click", onChengeColorBtn);


function onChengeColorBtn(event) {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  color.textContent = bgColor;
}
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`);


const elements = ingredients.map(option => {
  const element = document.createElement("li");
  element.textContent = option;
  element.className = 'item';
  return element;
})

list.append(...elements);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`);


const makeIngredients = options => {
  return options.map(options => {
    const element = document.createElement("li");
    element.textContent = options;
    element.className = 'item';
    return element;
  });
};

const elements = makeIngredients(ingredients);
list.append(...elements);

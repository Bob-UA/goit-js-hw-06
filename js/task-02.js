const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`);

console.log(list);
const listItem = document.createElement("li");

listItem.textContent = ingredients.forEach(function(name, index){
  console.log(name);

  if (list.children.length < ingredients.length) {
    document.createElement("li");
    listItem.textContent = name;
  }
})

console.log(list.children.length);
console.log(ingredients.length);
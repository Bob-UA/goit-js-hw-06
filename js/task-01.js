const listEl = document.querySelectorAll('#categories ul');
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(function (element) {
    const title = element.parentNode.querySelector(`h2`).textContent;
    const itemCount = element.querySelectorAll(`li`).length;
    
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
});

let counterValue = document.querySelector("#value").textContent;
console.log(counterValue);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

incrementBtn.addEventListener('clic', () => {
    return counterValue += 1;
    console.log(counterValue);
})



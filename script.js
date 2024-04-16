document.addEventListener("DOMContentLoaded", 
    renderFoods()
);

const foodsContainer = document.getElementById("foods-container");

const url = "http://localhost:3001/foods"
function renderFoods() {
    fetch(url)
    .then(res => res.json())
    .then(data => showFood(data))
};

function showFood(food) {
    const card = document.createElement("div");
    card.classList.add('foods-card')
    card.innerHTML = `
        <img src='${food.id}' alt={'food image'}/>
        <h4>${food.name}</h4>
    `
    foodsContainer.appendChild(card)
};
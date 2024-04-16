document.addEventListener("DOMContentLoaded", () => {
    renderFoods();
})



function foodsList(foods) {
    foods.forEach(renderFoods);
}
let currentFood;
function renderFoods(foods) {
    // constfoodName = document.querySelector('.name')
    const bar = document.querySelector('foods-list');
    const spanElement = document.createElement('span');
    spanElement.innerHTML = foods.name;
    bar.appendChild(spanElement);
    spanElement.cursor = 'pointer';
    spanElement.addEventListener('click', () => {
        currentFood = foods;
        showFood(foods);
    });
}

function fetchFoods() {
    fetch('http://localhost:');
}

function showFood(foods) {
    const foodsName = document.querySelector('.name');
    foodsName.innerHTML = foods.name;
    const foodImg = document.querySelector('#image');
    foodImg.src = foods.image;
    // likes go here
}

let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

function like(){
    likebtn.addEventListener('click', () => {
    input1.value = parseInt(input1.value) +1;
    input1.style.color = "#07ff13";
    });
}
like();
function dislike() {
    dislikebtn.addEventListener('click', () => {
    input2.value = parseInt(input2.value) +1;
    input2.style.color = "#ff0000";
    });
}
dislike();

const resetLikes = document.getElementById('reset-btn')
resetLikes.style.cursor = 'pointer';
resetLikes.addEventListener('click', () => {
    currentFood.likes=0;
    showFood(currentFood);
    div.reset();
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
       console.log(e.target.submitBtn.value)
    });
});

function buildForm() {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = ('X')
    p.textContent = `${foodie}`
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#submitBtn').appendChild(p)
}

function handleDelete(e) {
    e.target.parentNode.remove()
}



function renderFoods(){
    fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(foods => foods.forEach(food => renderFoods(food)))
}

function renderOneFood(food){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src"${food.imageUrl}">
    <div class="content">
        <h4>${food.name}</h4>
        <p>
            ${food.food}
            ${food.category}
            ${food.food-group}
            ${food.classification}
        </p>
       <p>
            <span class="likes-count">${food.likes}</span> Liked
        <p/> 
    </div>
    `
    document.querySelector("#foods-list").appendChild(card)
}




function initialize() {
    // renderFoods()
    // foods.forEach(food => renderOneFood(food))
};
initialize();

function addFood() {
    fetch('http://localhost:3000/foods', {
       method: 'POST'
        headers: {
            'Content-Type: application/json'
        },
        body:JSON.stringify(renderfo)
    })
    // .then()
}


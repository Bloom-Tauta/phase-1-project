document.addEventListener("DOMContentLoaded", () => {
    getFoods();
})

function getFoods() {
    fetch("http://localhost:3000/foods")
    .then((resp) => resp.json())
    .then(data => {console.log(data)})
}

function renderOneFood() {
    
let card = document.createElement('li')
card.classname = 'card'
card.innerHTML = `
    <image src="${food.imageURL}"/>
    <div class = "content">


`
    document.querySelector('#foods-list').appendChild(card);
}

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




document.addEventListener('DOMContentLoaded', renderFoods);

const submitBtn = document.getElementById('submit-btn');
const foodsList = document.querySelector('.foods-list');

//fetch foods from db.json and render them
function renderFoods() {
    fetch("http://localhost:3001/foods")
    .then(res => res.json())
    .then(data => data.forEach(food => renderOneFood(food)))
};

function renderOneFood(food) {
    const li = document.createElement("li");
    li.classList.add("food");
    li.innerHTML = `
        <img src=${food.imgUrl} alt=${food.name} height=${250} width=${250}/>
        <p class="food-name">${food.name}</p>
        <p class="food-category">${food.category}</p>
        <p class="food-group">${food.group}</p>
        <p class="food-classification">${food.classification}</p>
        <p class="food-likes"><span class="likes-count">${food.likes}</span> Likes</p>
    `;
    foodsList.appendChild(li);
};

// ADD NEW FOODS
function addFood(newFood) {
    fetch("http://localhost:3001/foods", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newFood),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

// LKE FUNCTIONALITY
let likebtn = document.querySelector("#likebtn");
let dislikebtn = document.querySelector("#dislikebtn");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

function like() {
	likebtn.addEventListener("click", () => {
		input1.value = parseInt(input1.value) + 1;
		input1.style.color = "#07ff13";
	});
}
like();
function dislike() {
	dislikebtn.addEventListener("click", () => {
		input2.value = parseInt(input2.value) + 1;
		input2.style.color = "#ff0000";
	});
}
dislike();

const resetLikes = document.getElementById("reset-btn");
resetLikes.style.cursor = "pointer";
resetLikes.addEventListener("click", () => {
	currentFood.likes = 0;
	showFood(currentFood);
	div.reset();
});
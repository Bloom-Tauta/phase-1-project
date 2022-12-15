document.addEventListener("DOMContentLoaded", () => {
    getFoods();
})

function getFoods() {
    fetch("http://localhost:3000/foods")
    .then((resp) => resp.json())
    .then(data => {console.log(data)})
}

// function renderFood() {

// }

let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

function like(){
    likebtn.addEventListener('click', () => {
    input1.value = parseInt(input1.value) +1;
    input1.style.color = "#12ff00";
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

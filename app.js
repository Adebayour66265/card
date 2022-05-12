const card = document.getElementById('card');
const second = document.getElementById('cardSecond');
const three = document.getElementById('cardThree');

function font(){
    card.style.transform = "rotateY(-180deg)";
}

function back(){
    card.style.transform = "rotateY(0deg)";
}

function secondFont(){
    cardSecond.style.transform = "rotateY(-180deg)";
}
function secondBack(){
    cardSecond.style.transform = "rotate(0deg)";
}

function fontThree(){
    three.style.transform = "rotateY(-180deg)";
}
function backThree(){
    three.style.transform = "rotateY(0deg)";
}
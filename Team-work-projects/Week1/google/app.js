const element = document.querySelector('.mode');
const body = document.getElementById('container');

function chance(){
    // body.style.backgroundColor = "#000";
    // body.style.color = "white";
    body.classList.toggle('dark');
}

element.addEventListener("click",chance)
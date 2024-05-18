

const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase")
const resetbtn = document.getElementById("reset")
const counter = document.getElementById("numbers")
let count = 0;

decreasebtn.onclick = function(){
    count--;
    counter.textContent = count;
}

increasebtn.onclick = function(){
    count++;
    counter.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}
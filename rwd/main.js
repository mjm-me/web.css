const elementBurger = document.querySelector(".fa-bars");
const elementDialog = document.querySelector("dialog");
const elementClose = document.querySelector(".close");

console.dir(elementBurger);
console.dir(elementDialog);

function handlerClick() {
    elementDialog.showModal();
}

function handlerClose() {
    elementDialog.close();
}

elementBurger.addEventListener("click", handlerClick);
elementClose.addEventListener("click", handlerClose);

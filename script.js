let inputRowNumberMove = document.querySelector("#rowNumber");
let inputColNumberMove = document.querySelector("#colNumber");
let inputRowNumberMoveIn = document.querySelector("#rowNumberIn");
let inputColNumberMoveIn = document.querySelector("#colNumberIn");
let btn = document.querySelector("button");
let rows = document.querySelectorAll("tr");
let table = [
    ["*", "*", "*"],
    ["*", "*", "*"],
];
btn.onclick = function () {
    let furnitureRow = rows[inputRowNumberMove.value];
    let cols = furnitureRow.querySelectorAll("td");
    let furnitureCol = cols[inputColNumberMove.value];
    console.log(furnitureCol)
    let emptyRow = rows[inputRowNumberMoveIn.value]
    let cols2 = emptyRow.querySelectorAll("td")
    let emptyCol = cols2 [inputColNumberMoveIn.value]
    console.log(emptyCol)
    if(emptyCol.innerHTML == "") {
        emptyCol.innerHTML = furnitureCol.innerHTML
        furnitureCol.innerHTML = ""
    }
    if(checkWinner() == true){
        alert("Ты победил")
    }
};
function checkWinner() {
    let upperCol = rows[0].querySelectorAll("td") [2]
    let lowerCol = rows[1].querySelectorAll("td") [2]
    if(upperCol.innerHTML == "Кресло" && lowerCol.innerHTML == "Шкаф") {
        return true

    }
}


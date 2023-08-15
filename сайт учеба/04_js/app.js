// Получаю данные из html в NodeList 
let cardNodeList = document.querySelectorAll('.card_box'); 
// Формирую массив из элементов NodeList 
const cardArr = [];
for (let i of cardNodeList){
    cardArr.push(i);
}
// Объявляю переменные для контейнера и кнопки
let cardCont = document.querySelector("#cards");
let addCard = document.querySelector('#add');

// вывожу часть массива по кнопке
addCard.addEventListener("click", function (){
    let cardVisible = cardArr.splice(0,3);
    console.log(cardVisible);
    cardCont.insertAdjacentHTML("beforeend", cardVisible);
    if (cardVisible.length === 0) {
        addCard.style.display = "none";
      }
});




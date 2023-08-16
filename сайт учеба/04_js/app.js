let cardNodeList = document.querySelectorAll('.card_box'); 
let card_boxArr = [...cardNodeList];
let ButShow = document.querySelector('#add');

for (let i = 0; i < card_boxArr.length; i++){
     if (i > 3){
        card_boxArr[i].hidden = true;
     } 
};

let cardNext = card_boxArr.slice (4, );
ButShow.addEventListener("click", function (){
    for (let card of cardNext){
        if (cardNext.length === 0) {
        ButShow.style.display = "none";
        }
            console.log (card);
            card.hidden = false;
            cardNext = cardNext.slice(4,);
            };
});




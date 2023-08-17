let cardNodeList = document.querySelectorAll('.card_box'); 
let card_boxArr = [...cardNodeList];
let ButShow = document.querySelector('#add');
let ButHide = document.querySelector('#hide');
    ButHide.hidden = true;

for (let i = 0; i < card_boxArr.length; i++){
     if (i > 4){
        card_boxArr[i].hidden = true;
     } 
};

ButShow.addEventListener("click", function (){
    let cardNext = card_boxArr.slice (5, );
    for (let card of cardNext){
        if (cardNext.length === 0) {
        ButShow.hidden = true;
        ButHide.hidden = false;
        }
            console.log (card);
            card.hidden = false;
            cardNext = cardNext.slice(5,);
            };
});

ButHide.addEventListener("click", function (){
    card_boxArr = [...cardNodeList];
    for (let i = 0; i < card_boxArr.length; i++){
        if (i > 4){
           card_boxArr[i].hidden = true;
        } 
   };
    ButShow.hidden = false;
    ButHide.hidden = true;

});




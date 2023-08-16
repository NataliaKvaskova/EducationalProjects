let cardNodeList = document.querySelectorAll('.card_box'); 

let card_boxArr = [...cardNodeList];
console.log (card_boxArr);
console.log ("___________");


for (let i = 0; i < card_boxArr.length; i++){
     if (i > 3){
        console.log (card_boxArr[i])
        card_boxArr[i].hidden = true;

     }
 
    
};


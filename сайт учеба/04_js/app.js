let card = [
    {
        img_card: "../03_img/js.png",
        img_alt: "Лабораторная работа по JS Функции",
        link_card: "../05_project/Лаб раб 5_Кваскова НГ/01_html/index.html",
    },

    {
        img_card: "../03_img/js.png",
        img_alt: "Лабораторная работа по JS Массивы",
        link_card: "../05_project/Лаб раб 3_Кваскова НГ/01_html/index.html",
    },

    {
        img_card: "../03_img/js.png",
        img_alt: "Лабораторная работа по JS №3",
        link_card: "../05_project/Доп_лаб_раб по JS №2_Кваскова НГ/01_html/index.html",
    },
    {
        img_card: "../03_img/js.png",
        img_alt: "Лабораторная работа по JS №2",
        link_card: "../05_project/Доп_лаб_раб по JS_Кваскова НГ/01_html/index.html",
    },
    {
        img_card: "../03_img/js.png" ,
        img_alt: "Лабораторная работа по JS №1" ,
        link_card: "../05_project/Лабороторная по JS №1_Кваскова НГ/01_html/index.html",
    },
    {
        img_card: "../03_img/final_html_css.png" ,
        img_alt: "Зачетная работа HTML/CSS",
        link_card: "../05_project/Зачетная работа html_css/02_html/index.html",
    },
    {
        img_card: "../03_img/css.png" ,
        img_alt: "Лабораторная работа №3",
        link_card: "../05_project/Лаб_раб 3_Кваскова НГ/qr-code-component-main/html/index.html",
    },
    {
        img_card: "../03_img/html.png" ,
        img_alt: "Лабораторная работа №2",
        link_card: "../05_project/Лаб раб 2_Кваскова НГ/html/index.html",
    },
    {
        img_card: "../03_img/html.png",
        img_alt: "Лабораторная работа №1" ,
        link_card: "../05_project/Лаб раб _1_Fullver_Кваскова НГ/html/index.html" ,
    }
];

let cardStr = '';
for (let card_elem of card){
    cardStr += `
    <div class = "card_box">
    <img src= "${card_elem.img_card}" alt= "${card_elem.img_alt}" class = "card_img">
    <a href = "${card_elem.link_card}" target="_blank">${card_elem.img_alt}</a>
    </div>
    `
};

let cardContainer = document.querySelector("#cards");
cardContainer.insertAdjacentHTML("beforeend", cardStr);


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
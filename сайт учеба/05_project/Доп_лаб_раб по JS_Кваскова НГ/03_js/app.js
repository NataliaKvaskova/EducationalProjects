let test = 6;

if (test > 10) {
    alert (`${test} больше 10: верно`);
    
} else {
    alert(`${test} больше 10: неверно`);
}

if (test < 10) {

    alert (`${test} меньше 10: верно`);
    
} else {
    alert(`${test} меньше 10: неверно`);
}

test = 9;

if (test >= 10) {

    alert (`${test} больше или равно 10: неверно`);
    
} else {alert(`${test} больше или равно 10: неверно`);}

if (test <= 10) {

    alert (`${test} меньше или равно 10: верно`);
    
} else{
    alert (`${test} меньше или равно 10: неверно`);
}

if (test==10) {
    alert(`${test} равно 10: верно`);
} else{
    alert(`${test} равно 10: неверно`);

}

test = 15;
if (test != 10){
    alert(`${test} неравно 10: верно`);
} else {
    alert(`${test} неравно 10: неверно`);
}

test = 10;
let test1 = 25;

if ((test-test1) > 0) {
    alert(`${test} больше ${test1}`)
    
} else if ((test - test1) < 0){
    alert(`${test} меньше ${test1}`)
} else {
    alert(`${test} равно ${test1}`)
}

let num = 20;
if (num > 0 && num < 5) {
    alert(`${num} больше 0 и меньше 5: верно`);
} else {
    alert(`${num} больше 0 и меньше 5: неверно`);
}

if (num >= 10 && num <= 20) {
    alert(`${num} больше или равно 10 и меньше или равна 20: верно`);
} else {
    alert(`${num} больше или равно 10 и меньше или равна 20: неверно`);
}

let num1 = 15;
let num2 = 20;

if(num1 <=1 && num2 >= 3){
    alert(` Если переменная num1 равна или меньше 1, 
    и 
    переменная num2 больше или равна 3, то выведите на экран  слово верно, иначе выведите слово неверно.

    num1 равно ${num1}, num2 равно ${num2}. Верно`);
}else {
    alert(` Если переменная num1 равна или меньше 1, 
    и 
    переменная num2 больше или равна 3, то выведите на экран  слово верно, иначе выведите слово неверно.

    num1 = ${num1}, num2 = ${num2}. Неверно`);
}

let day = 18;

if (day >=1 && day < 11 ){
    alert(`число ${day} относится к первой декаде месяца`);
} else if (day >=11 && day < 21){
    alert(`число ${day} относится ко второй декаде месяца`);
} else if (day >=21 && day <= 31 ) {
    alert(`число ${day} относится к третей декаде месяца`);
} else {
    alert(`${day} выходит за пределы месяца`);
}

let num3 = 105;
let num4;
let num5;

if (num3 >=10 && num3<=99){
    num4 = String(num3);
    num5 = Number(num4[0]) + Number(num4[1]);
        if (num5 <= 9) {
            alert(`Сумма цифр в числе ${num3} однозначна`);
        } else {
            alert(`Сумма цифр в числе ${num3} двузначна`);
        }
} else {
    alert(`Число ${num3} не входит в диапозон чисел от 10 до 99`);
}

let n = 1253;
let y = String(n);
let z = y.length-1; 
let boll;

if (y[z] == 0) {
    boll = true;
    alert(`Утверждение, что последняя цифра числа ${n} равна 0: ${boll}`);
    
} else {
    boll = false;
    alert(`Утверждение, что последняя цифра числа ${n} равна 0: ${boll}`);
}

if (y[z]==0 || y[z]==2 || y[z]==4 || y[z]==6 || y[z]==8) {
    alert (`Число ${n} четное`);
} else {
    alert (`Число ${n} нечетное`);
}

if (n%2 != 0){
    alert (`Число ${n} не делится на 2 без остатка. Число нечетное`);
} else {
    alert (`Число ${n} делится на 2 без остатка. Число четное`);
}

if (n%3 != 0){
    alert (`Число ${n} без остатка на 3 не делится.`);
} else {
    alert (`Число ${n} делится на 3 без остатка.`);
}

let month = 12;

if (month <=2 && month>0|| month == 12){
    alert(`${month} месяц относится к зиме.`);
}else if (month >=3 && month <=5){
    alert(`${month} месяц относится к весне.`);
}else if (month >=6 && month <=8){
    alert(`${month} месяц относится к лету.`);
}else if (month >=9 && month <=11){
    alert(`${month} месяц относится к осени.`);
}else {
    alert(`Число ${month} выходит за пределы заданного интервала`);
}

let str = `fdgdfkjghdfjhdf`

if (str[0]===`a` || str[0]===`а`){
    alert (`Да, первым символ строки ${str} является буква a`);
}else{
    alert (`Нет, первым символ строки ${str} не является буква a`);
}

let num6 = 5123456;
let num6Str = String(num6);

if (num6Str[0]==1 || num6Str[0]== 2 || num6Str[0]==3 ){
    alert(`Да, первым символом числа ${num6} является цифра 1, 2 или 3`);
}else{
    alert(`Нет, первым символом числа ${num6} не является цифра 1, 2 или 3`);
}

let num7 = 124;
let num7Str = String(num7);
if (num7Str.length ==3){
alert(`Сумма цифр числа ${num7} равна ${Number(num7Str[0]) + Number(num7Str[1]) + Number(num7Str[2])}`);
}else {
    alert(`Число ${num7} не является трехзначным`);
}

let num8 = 183265;
let num8Str = String(num8);

if (num8Str.length==6) {
    if ( Number(num8Str[0])+ Number(num8Str[1]) + Number(num8Str[2]) == Number(num8Str[3]) + Number(num8Str[4]) + Number(num8Str[5])){
    alert(`Да. Сумма первых трех цифр в числе ${num8} равняется сумме вторых трех цифр.`);
        }else {
    alert(`Нет. Сумма первых трех цифр в числе ${num8} не равняется сумме вторых трех цифр.`);
        }
}else {
    alert (`Число ${num8} не является шестизначным`);
}

let num9 = -6;
let result = num9 >= 0 ? '(1) положительное': '(-1) отрицательное';
alert(`Число ${num9} ${result}`);

let a = 2 * (3 - 1);
let b = 6 - 2;
let c = a == b ? "Переменные a и b равны" : "Переменные a и b неравны";

alert(c);

a = 5 * (7 - 4);
b = 1 + 2 + 7;
c = a > b ? 'Переменная a больше переменной b': 'Переменная a больше переменной b';

alert(c);

a = 2 ** 4;
b = 4 ** 2;

c = a != b ? "Переменные неравны": "Переменные равны";
alert(c);

let age = 25;
let conAcces = age >= 18 ? "Данный контент предназначен для взрослых" :"Доступ запрещен";
alert(conAcces);







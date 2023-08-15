console.log ("Задание 1. С помощью цикла for выведите в консоль числа от 1 до 100.")
for (let i=1; i<=100; i++){
    console.log (i);
}
console.log ("Задание 2. С помощью цикла for выведите в консоль числа от 11 до 33.")

for (let i=11; i<=33; i++){
    console.log (i);
}

console.log ("С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.")

for (let i=0; i<=100; i+=2) {
    console.log (i);
}

console.log ("С помощью цикла for и условного оператора if выведите в консоль четные числа в промежутке от 0 до 100.")

for(let i=0; i<=100; i++){
    if (i % 2 == 0){
        console.log (i);
    }
}
console.log (" программист забыл включить шаг с изменением значения переменной, поэтому условие цикла оставалось всегда истинным. Решение: let i= 10; while (i >= 1) {console.log(i);i--;} ");
let i = 10;
while (i >= 1) {
console.log(i);
i--;
}

console.log ("в последней строке цикла программист увеличивал значение переменной, поэтому условие цикла оставалось всегда истинным. Решение: let i= 10; while (i >= 1) {console.log(i);i--;} ");

console.log ("по условиям цикла было поставлено, что цикл выполняется при условии, что переменная равна 0. Но по определению она изначально больше 0. Поэтому условие цикла изначально приобретает значение ложь, и цикл не выполняется. Решение: let i= 10; while (i >= 1) {console.log(i);i--;} ");


console.log ("по условию, цикл выполняется до тех пор, пока переменная равна 10. При первом вхождении условие было выполнено, результат отобразился на экране. После чего значение переменной было уменьшено на 1 и перестало быть равным 10. Поэтому при втором вхождении условие получило значение ложь, и цикл прекратился. Решение: let i= 10; while (i >= 1) {console.log(i);i--;} ");

let summ = 0;
for (let i=10; i<=50; i++){
    summ = summ + i;
}

console.log (` Сумма чисел от 10 до 50 равна ${summ}`);

let summ1 = 0;
for (let i=10; i<=50; i++){
    summ1 = summ1 + i;
}

console.log (` Сумма чисел от 10 до 50 равна ${summ}`);

let multiplic = 1;
for (let i=1; i<=20; i++){
    multiplic = multiplic*i;
}

console.log (`Произведение чисел от 1 до 20 равна ${multiplic}`);

let evenSumm = 0;
for (let i=2; i<=100; i+=2){
    evenSumm = evenSumm + i;
}
console.log (`Сумма четных чисел от 2 до 100 равна ${evenSumm}`)

let = oddSumm = 0;
for (let i=1; i<=99; i++){
    if (i % 2 != 0){
        oddSumm = oddSumm + i;
    }
}
console.log (`Сумма нечетных чисел от 1 до 99 равна ${oddSumm}`);

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i=0; i <= arr.length-1; i++){
    console.log (arr[i]);
}

console.log ("последнее значение не определено, тк индексы начинаются с 0. последний индекс в массиве на единицу меньше его длины. Правильное решение: let arr1 = [1, 2, 3, 4, 5]; for (let i = 0; i <= arr1.length-1; i++) {console.log(arr1[i]);}");


console.log ("все элементы массива")
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr1.length-1; i++) {
console.log(arr1[i]);
}
console.log ("нечетные элементы массива")
for (let i=0; i<=arr1.length-1; i++){
    if (arr1[i] % 2 !=0) {
        console.log(arr1[i]);
    }
}

let multiplicArr = arr1[0];
for (let i = 1; i <= arr1.length-1; i++) {
    multiplicArr = multiplicArr*arr1[i];
}
console.log (`произведение всех элементов массива = ${multiplicArr}`);

for (let elArr of arr){
    console.log (elArr);
}
let multiElArr1 = arr1[0];
for (let elArr1 of arr1){
    multiElArr1 = multiElArr1*elArr1;
}
console.log (`Произведение элементов числового массива = ${multiElArr1}`);
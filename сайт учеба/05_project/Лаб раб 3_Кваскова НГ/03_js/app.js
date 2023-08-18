let arr = ['a', 'b', 'c'];
alert (`Упражнение 1. Массив элементов ${arr}
Первый элемент массива = ${arr[0]}
Второй элемент массива =${arr[1]}
Третий элемент массива = ${arr[2]}`);   
console.log (`Упражнение 1. Массив элементов ${arr}`);


console.log ("Массив состоит из элементов:");
for (let elemArr of arr){
    console.log (elemArr);
};

alert (`Упражнение 3:
${arr[0]} + ${arr[1]} + ${arr[2]}`);
console.log (`Упражнение 3:
${arr[0]} + ${arr[1]} + ${arr[2]}`);

let arr1 = [1, 2, 3];
let summArr = 0;
for (elemArr of arr1){
    summArr = summArr+ elemArr;
}

console.log (` Сумма элементов массива равна ${summArr}`);

let arr2 = [2, 5, 3, 9];
let result = arr2[0]*arr2[1]+arr2[2]*arr2[3];
console.log (result);

let arr3 = ["голубика", "малина", "ежевика", "земляника", "смородина"];
console.log (` Длина массива равна ${arr3.length}
Последний элемент массива = ${arr3[arr3.length-1]}`);

let arr4 = ["a", "b", "c"];
console.log (`Первоначальный массив состоит из ${arr4}`);
for (let i = 0; i < arr4.length; i++){
    arr4[i] = i+1;
}
console.log (`Новый массив включает элементы ${arr4}`);

for (let i = 0; i < arr4.length; i++){
    arr4[i] += 3;
}
console.log (`Если увеличить все элементы массива на 3, то массив будет включать в себя значения ${arr4}`);

let arr5 = [1,2,3,];
for (let i = 0; i < arr5.length; i++){
    arr5[i]++;
}
console.log (` Элементы массива увеличены на 1. Теперь массив включает в себя значения ${arr5}`);

let arr6 = [1, 2, 3,];
console.log (` Дан массив ${arr6}`);
arr6.push(4, 5)
console.log (`В массив добавлены новые элементы 4 и 5: ${arr6}`);

let arr7 = [];
arr7[3] = 'a';
arr7[8] = 'b';

console.log (` Длина массива равна ${arr7.length}`);

let object1 = {
    1: "a",
    2: "b",
    3: "c",
}

console.log (object1);

let object2 = {
    "a": 1,
    "b": 2,
    "c": 3,
}

let sumOb2 = 0;
for (let el in object2){
    sumOb2 += object2[el];
}
console.log (` Сумма элементов объектов равна ${sumOb2}`)

let object3 = {
    "1a": 1,
    "2b": 2,
    "c-c": 3,
}
let sumOb3 = 0;
for (let el in object3){
 sumOb3 += object3[el];
}
console.log (` Сумма элементов объектов равна ${sumOb3}`);

let newDate = new Date();
console.log (newDate);

let year = newDate.getFullYear(), month = 1 + newDate.getMonth(), day = newDate.getDate();

let data = {year, month, day};
console.log (data);

console.log (`${data.year} \- ${month} \- ${day}`);

let obj = {key1: 1, key2: 2, key3: 3};
let sumObj = 0;
for (let el in obj){
 sumObj += obj[el];
}
console.log (` Сумма элементов объектов равна ${sumObj}`);

let obj1 = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
console.log (obj1["1a"], obj1.b2, obj1["eee-"], obj1.d4);
console.log (`Обратиться через точку можно к элементам с ключами \"b2" и  \"d4" `);
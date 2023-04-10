/*Реалізувати програму на Javascript, яка знаходитиме всі числа кратні 5 (діляться на 5 без залишку) у заданому діапазоні.

Отримати за допомогою модального вікна браузера число, яке введе користувач.
Вивести в консолі всі числа, кратні 5, від 0 до введеного користувачем числа. Якщо таких чисел немає - вивести в консоль фразу "Sorry, no numbers"
Перевірити, чи введене значення є цілим числом. Якщо ця умова не дотримується, повторювати виведення вікна на екран, доки не буде введено ціле число.
*/

let answer = Number(prompt('Write a number: ', ""));

while(!Number.isInteger (answer)){
    answer = Number(prompt('Write a whole number: ', ""));
}

for (let i=1; i < answer+1; i++){
    if ( !(i % 5)){
        alert (i);
    }else{
        console.log("Sorry, no numbers");
    }
}

/*Отримати два числа, m і n. Вивести в консоль усі прості числа
в діапазоні від m до n (менше із введених чисел буде m, більше буде n).
Якщо хоча б одне з чисел не відповідає умовам валідації, зазначеним вище, вивести повідомлення про помилку і запитати обидва числа знову.
*/

let m = Number(prompt('Number  1: ', ""));
let n = Number(prompt('Number  2: ', ""));

while (m >= n){
    m = Number(prompt('Error! Number  1 should be smaller then number 2: ', ""));
    n = Number(prompt('Number  2 should be bigger then number 1: ', ""));
}
for (m; m < n+1; m++){
    if (Number.isInteger(m)){
        alert (m);
    }
}
document.write("If you want to start the circle again, renew the browser.");
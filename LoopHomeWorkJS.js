console.log ("Виведіть в консоль числа від 1 до n використовуючи цикл for. (Дано: n = 10)");

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10);

console.log("Напишіть цикл, який обчислює суму чисел від 1 до n. (Дано: n = 100)");

function sumNumbers (n) {
  let result = 0;

  for (i = 1; i <= n; i++) {
      result +=i;
  }
  console.log (result);

}

sumNumbers(100);

console.log("Використовуючи цикл while, виведіть в консоль числа від n до 1. (Дано: n = 10)");

function printNumbersWhile(n) {
  let i = 1;
  while (i <=n){
    console.log (i);
    i++;
  }
  }

  printNumbersWhile(10);

console.log ("Напишіть цикл, який виводить всі парні числа від 1 до n. (Дано: n = 50)");

function printEvenNumbers(n){
    for (i=1; i<=n; i++){
    if (i%2===0) {
      console.log (i);
    }
  }
  
}

printEvenNumbers(50);

console.log ("Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли. (Дано: n = 10)");

function multiplicationTable(n) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <=10; k++) {
      console.log (`${j} * ${k} = ${j*k}`);
    }
    console.log ("__________________________");
  }

 }

 multiplicationTable(10);

 console.log ("Обчисліть факторіал числа n, використовуючи цикл. (Дано: n = 7)");

 function fuctorialOfNumber (n){
  let result = 1;
  for (let i=1; i<=n; i++){
    result = result * i;
  }
  console.log (` Факторіал числа ${n} - ${result}`);
 }

 fuctorialOfNumber (7);

 console.log ("Виведіть перші n чисел послідовності Фібоначчі. (Дано: n = 10)");

 function firstNumbersOfFibonachi(n){
  let a = 0;
  let b = 1; 
  for (let i = 1; i < n; i++){
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
 }

 firstNumbersOfFibonachi(10);

 console.log ("Виведіть всі прості числа від 1 до n. (Дано: n = 100)");

 function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimeNumbers(100);

console.log ("Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. (Дано: n = 100)");

function numbersDivisibleByFive(n) {
  const numbers = [];

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  const divisibleByFive = numbers.filter(num => num % 5 === 0);

  console.log(divisibleByFive);
}

numbersDivisibleByFive (100);

console.log ("Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
function printSumOfNumbers(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  console.log("Сума чисел:", sum);
}

printSumOfNumbers ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);







 

import './style.css'


console.log (5+3)
console.log('dfsd');

console.log(typeof '');
console.log(typeof null);

let a = ''
console.log(a==false);

let b
console.log(typeof b);

let c = 5
console.log(typeof c);

console.log(typeof alert);
console.log(typeof prompt);

console.log(+false);
console.log(false);

console.log(+true);
console.log(true);



console.log('b'>'a');
console.log('x'>'X');

// таблица юникод


console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(NaN));



console.log( typeof undefined);
console.log( typeof null);
console.log( typeof NaN);

let e = 10 
if (e>5) {
  console.log('успешно');  
}







console.log(null==null);
console.log(5*'df');

console.log(typeof(5+'df'));


 


// let acc=0
// let num = [
//   8845,
// 56050,
// 5,
// 781,
// 142993,
// 1094,
// 103444,
// 2764,
// 8573,
// 116,
// 1,
// 1,
// 52840,
// 30337,
// 274978,
// 34312,
// 3,
// ]


// num.forEach(el=> 
//   acc+=el
// )

// console.log(acc/1000_000);
// console.log(acc.toFixed(1));




//! 1. Создайте скрипт, который запрашивает ввод двух чисел 
// (используйте prompt) и после показывает их сумму.

// let x = Number(prompt('введите число 1'))
// let y = Number(prompt('введите число 2'))
// console.log(x+y);



//! 2. Как правильно округлить 6.35? на 6.4

// let x = 6.35
// console.log(Math.round(x*10)/10);
// console.log(Math.round(x));



//! 3. Создайте функцию readNumber, которая будет запрашивать ввод 
// числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае 
// функция должна вернуть null.

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;
//   return +num;
// }

// alert(`Число: ${readNumber()}`);



//! 4. Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }


//! 5.Напишите функцию random(min, max), которая генерирует 
// случайное число с плавающей точкой от min до max (но не 
// включая max).


function randomss(min, max) {
  return min + Math.random() * (max - min)
}

console.log(randomss(1,5));


// Напишите функцию randomInteger(min, max), которая генерирует 
// случайное целое (integer) число от min до max (включительно).
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log( randomInteger(1, 3) );




let str = 'evening'




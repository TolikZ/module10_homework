let myValue = prompt('Введите любое число', '');

let myNumber = +myValue;

if (isNaN(myNumber % 2)) {
  console.log('Упс, кажется, вы ошиблись')
} else if (myNumber % 2 === 0) {
  console.log('Число четное')
} else {
  console.log('Число нечетное')
}
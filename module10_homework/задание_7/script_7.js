let myArray = [1, 2, 3, 4, 7, 100, 0, null, 0, "zero"];

let oddNum = 0;
let evenNum = 0;
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 == 0) {
    evenNum++;
  }
  else {
    oddNum++;
  }
}
console.log("Четные: " + evenNum);
console.log("Нечетные: " + oddNum);

let countNumber = 0;
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "number") {
    countNumber++;
  }
}
console.log("Количество чисел в массиве: " + countNumber);

let countString = 0;
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "string") {
    countString++;
  }
}
console.log("Количество строк в массиве: " + countString);

let itemZero = myArray.filter(value => value === 0).length;
console.log("Нулей в массиве: " + itemZero);

let itemNull = myArray.filter(value => value === null).length;
console.log("Null в массиве: " + itemNull);

let itemNan = myArray.filter(value => value === NaN).length;
console.log("NaN в массиве: " + itemNan);
let myArray = [1, 2, 3, 4, 1, 100];

let allIdentical = myArray.every((value, index, array) => value === myArray[0]);

console.log(allIdentical);
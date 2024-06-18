let myArray = [1, 2, 3, 4];

console.log(myArray.length);

myArray.forEach((item, index, array) => {
  console.log(item);
});

for (let item of myArray) {
  console.log(item)
};
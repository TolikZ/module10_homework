let myMap = new Map();

myMap.set('Car', 'Toyota');
myMap.set('Color', 'Red');
myMap.set('Number', 45);

myMap.forEach((value, key, map) => {
  console.log(`"Ключ — ${key}, значение — ${value}"`);
});
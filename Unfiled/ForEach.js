arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random()*100));
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - 1;
  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j] - 1;
  }
}

console.log(arr);

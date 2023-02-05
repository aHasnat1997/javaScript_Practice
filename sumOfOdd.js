function sumOfOdd(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      sum += num[i];
    }
  }
  return sum;
}
let numArray = sumOfOdd([5, 3, 8, 10, 13]);
console.log(numArray);

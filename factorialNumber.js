// Factorial Number

function factorialNumber(num){
  let multi = 1;
  for(let i=1 ; i <= num ; i++){
    multi *= i;
  }
  return multi;
}

let number = factorialNumber(5);
console.log(number);


function onlyPositive(numbers){
  let positiveNumber = [];
  let i = 0;
  while(numbers.length > i){
    if(numbers[i] < 0){
      break;
    }
    else{
      positiveNumber.push(numbers[i]);
    }
    i++;
  }
  return positiveNumber;
}

const num = [5, 20, 57, 80, -5, 20, 53];
console.log(onlyPositive(num));

function isLeapYear(year){
  if(year%4 == 0){
    return 'It is Leap Year';
  }
  else{
    return 'It is not Leap Year';
  }
}

console.log(isLeapYear(2023));
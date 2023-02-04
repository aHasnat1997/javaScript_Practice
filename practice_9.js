function rev(string){
  let stringLength = string.length - 1;
  let tempString = '';
  for(let i = stringLength ; i >= 0 ; i--){
    tempString += string[i];
  }
  return tempString;
}

console.log(rev('kala PakhE'));

// const str = 'GeeksforGeeks';
// let stringLength = str.length - 1;
// let tempString = '';
// for (let i = stringLength; i >= 0; i--) {
//   tempString += str[i];
// }
// console.log(tempString);

function stringCombine(str1, str2){
  
  // const strCombo = str1 + ' ' + str2;
  const strCombo = str1.concat(str2);

  return strCombo;

}

const strOne = 'I am going to be';
const strTwo = 'an awesome web developer';

console.log(stringCombine(strOne, strTwo));

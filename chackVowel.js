function chack(cah){
  let alp = cah.toLowerCase();
  if(alp == 'a' || alp == 'e' || alp == 'i' || alp == 'o' || alp == 'u'){
    return (alp, ' is Vowel');
  }
  else{
    return (alp, ' is Consonent');
  }
}

console.log(chack('N'));
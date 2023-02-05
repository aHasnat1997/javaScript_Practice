// If the first character in string s is in the set {a , e, i, o, u} then return A.
// If the first character in string s is in the set {b , c, d, f, g} then return B.
// If the first character in string s is in the set {h , j , k, l, m} then return C.
// If the first character in string s is in the set {n , p , q , r , s , t , v , w , x , y , z} then return D.

function getLetter(s) {
  let letter;
  let str = s.toLowerCase();
  let w = str[0];
  console.log(str);
  if(typeof s !== "string"){
    return 'Enter String';
  }
  else if(w=='a' || w=='e' || w=='i' || w=='o' || w=='u'){
    letter = 'A';
  }
  else if(w=='b' || w=='c' || w=='d' || w=='f' || w=='g'){
    letter = 'B';
  }
  else if(w=='h' || w=='j' || w=='k' || w=='l' || w=='m'){
    letter = 'C';
  }
  else{
    letter = 'D';
  }

  return letter;
}

const str = 'SJkljjsKJ';
console.log(getLetter(str));
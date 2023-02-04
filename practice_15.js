function paperRequirements(bookOne, bookTwo, bookThree){
  firstBook = bookOne * 100;
  secondBook = bookTwo * 200;
  thirdBook = bookThree * 300;

  return firstBook+secondBook+thirdBook;
}

console.log(paperRequirements(5, 2, 1), 'pages needed');
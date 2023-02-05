function triangleArea(a, b, c){
  const s = ((a+b+c)/2);
  const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  if(a == b && a == c && c == a){
    console.log('Equilateral Triangle');
  }
  else if(a == b || a == c || c == b){
    console.log('Scalene Triangle');
  }
  else{
    console.log('Isosceles Triangle');
  }
  return area;
}

const triangle = triangleArea(28, 48, 21);
console.log('Area of the Triangle is: ', triangle.toFixed(3));

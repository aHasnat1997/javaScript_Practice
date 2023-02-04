var subjects = [75.25, 65, 80, 35.45, 99.50];

var sum = 0;

for(var i = 0 ; i < subjects.length ; i++){
  sum += subjects[i];
}

var abj = sum / subjects.length;

var abjFixed = abj.toFixed(2);

var abjParse = parseFloat(abjFixed);

console.log(typeof abjParse);
console.log(abjParse);

var subjects = [75.25, 65, 80, 35.45, 99.50];

function average(arrOfMarks) {
  var sum = 0;

  for (var i = 0; i < arrOfMarks.length; i++) {
    sum += arrOfMarks[i];
  }

  var average = sum / arrOfMarks.length;

  var averageFixed = average.toFixed(2);
  
  var averageParse = parseFloat(averageFixed);

  return averageParse;
}



console.log(typeof average(subjects));
console.log(average(subjects));


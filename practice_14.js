let preson = [
  {name: 'sakib', age: 30},
  {name: 'samiul', age: 60},
  {name: 'sahid', age: 50},
  {name: 'samin', age: 40}
];

function lowAge(personAge){
  let tempAge = personAge[0].age;
  let tempName = personAge[0].name;
  for(let i = 0; i < preson.length; i++){
    let tempPerson = personAge[i].age;
    if(tempAge > tempPerson){
      tempName = personAge[i].name;
    }
  }
  return tempName;
}

console.log(lowAge(preson));
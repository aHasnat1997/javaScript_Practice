function friendNames(name1, name2) {
  if (name1.length === name2.length) {
    return 'Both Same';
  }
  else if (name1.length < name2.length) {
    let stringLength = name2.length - 1;
    let tempString = '';
    for (let i = stringLength; i >= 0; i--) {
      tempString += name2[i];
    }
    return tempString;
  }
  else {
    let stringLength = name1.length - 1;
    let tempString = '';
    for (let i = stringLength; i >= 0; i--) {
      tempString += name1[i];
    }
    return tempString;
  }
}

const fName = friendNames('mothjh', 'robj');
console.log(fName);

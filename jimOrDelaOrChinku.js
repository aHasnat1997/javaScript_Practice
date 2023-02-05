/*
Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake."
This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?
*/

function jimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
  
  if(marksOfJim > marksOfDela && marksOfJim > marksOfChinku){
    return 'Jim';
  }
  else if(marksOfDela > marksOfJim && marksOfDela > marksOfChinku){
    return 'Dela';
  }
  else{
    return 'Chinku';
  }

}

console.log(jimOrDelaOrChinku(84, 69, 97 ))
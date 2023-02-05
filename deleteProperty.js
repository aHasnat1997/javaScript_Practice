const deleteProperty =(arr)=>{
  // Write your code here.

  if(Object.keys(arr[0]) == arr[1]){
    return 'YES';
  }
  else{
    return 'NO';
  }

}

// const array = [{fname:'John'}, 'fname'];

console.log(deleteProperty([
  {
   lastName:'Mithila',
  },'fname'
]));
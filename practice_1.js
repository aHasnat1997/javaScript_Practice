var num = [101, 45, 32, 8, 100, 64, 79];

for(var i = 0 ; i < num.length ; i++){
  var check = num[i];
  if(check % 2 == 0){
    console.log(num[i]+ ' ' +"Even");
  }
  else{
    console.log(num[i]+ ' ' +"Odd");
  }
}


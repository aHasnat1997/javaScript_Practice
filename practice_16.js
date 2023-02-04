const friendArray = ['jamal', 'robi', 'jahid', 'mim', 'babulmeya', 'showrov'];

function bestFriend(friend){
  let tempFriend = friend[0];
  let i = 0;
  while(i < friend.length){
    if(tempFriend.length > friend[i].length){
      tempFriend = friend[i];
    }
    i++;
  }
  return tempFriend;
}

console.log(bestFriend(friendArray));
function isPalindrome(word) {
  // Write your algorithm here
  word =word.toLowerCase(); 
  let i;
  let half =word.length/2;
  
  for (i=0; i< half; i++){
    let oppositeIndx= word.length-i-1;
    if(word[i]==word[oppositeIndx]){
      return true;
      console.log()
    }
    else{
      return false;
    }

  }

}

/* 
  Add your pseudocode here
  split the input string by half >  half= word.length/2;
  variable x= opposite index ;
  let index;
  
  for(index; index is less than half; add index to index ){
    if(word[index]==opposite index){
      return true
    }else {
      return false
    }
  }
  

  
    
*/

/*
  Add written explanation of your solution here
  a palindrome means that the characters of words on opposite indices will match. 
    for example with "abba" a>0, b>1 , b>2 , a>3. So character at index 0 should match character at index 3
     and charcater at index 2 should match character at index 1. 
     There is a mathematical way to do this by splitting the length of the input string at half. 
     So the function will only loop on the first half of the characters ,
     checking whether the first half of the input string matches the next half of the input string.
     If the characters match, then the function returns true else false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

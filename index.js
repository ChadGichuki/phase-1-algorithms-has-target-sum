function hasTargetSum(array, target) {
  // Outer loop through the array
  for (let i=0; i<array.length; i++){
    // Inner loop through the rest of the array
    for (let j=0; j<array.length; j++){
      // The number should skip itself
      if (i !== j){
        let sum = array[i] + array[j]
        // check if this sum is equal to target
        if (sum === target) return true
      }
    }
  }
  // Return false if no comparison evaluates to true
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  Loop through the array one number at a time
  For each number:
    Loop through the rest of the array.(Somehow skip the current number so you don't add it by itself)
    check if the sum of your current number + the other number is === to yor target
      return true if total matches
    else
      return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3], 7));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0, 0], 0));
}


module.exports = hasTargetSum;

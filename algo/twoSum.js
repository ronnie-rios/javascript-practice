var twoSum = function(nums, target) {
    for (let i =0; i < nums.length; i++) {
        let hold = target - nums[i]
        if( nums.includes(hold) && i != nums.indexOf(hold)) {
            return [i, nums.indexOf(hold)]
        }
    }
};
function twoNumberSum(array, targetSum) {
    // Write your code here.
     for(let i =0; i <array.length; i++) {
       first = array[i]
       for(let j=1; j <array.length; j++) {
         second = array[j]
         if(first + second === targetSum && first!=second) {
           return [first, second]
         }
       }
       
     }
    return []
  }

  function twoNumberSum2(array, targetSum) {
    // Write your code here.
     const check = new Set()
    for(let num of array) {
      const found = targetSum - num
      if(check.has(found)) {
        return [num, found]
      }
      check.add(num)
    } return []
  }
  
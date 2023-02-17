const pivotIndex = function(nums) {
    //get the total of the arr
    let sum = nums.reduce((acc, num) => acc + num, 0)
    //set the curr sum
    let currentSum = 0
    //loop through it
    for (let i = 0; i < nums.length; i++) {
        //add the prev or set to 0
        currentSum += (nums[i - 1] || 0)
        //check the sum - the value at the arr
        sum -= nums[i]
        //if the sum = curr sum, we found the index
        if (currentSum === sum) {
        return i
        }
    }
    return -1
    
};
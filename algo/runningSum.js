//Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
var runningSum = function(nums) {
    let answer = new Array(nums.length)
    answer[0] = nums[0]
    for(let i=1; i<nums.length;i++){
        answer[i]= answer[i-1] + nums[i]
    }
    return answer
};
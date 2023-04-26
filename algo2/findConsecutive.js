const nums = [2,5,3,5,7,23,12];
const sum = 15;
//expected [[2,3,3,5], [3,5,7]]

function findConsecutive(nums, target) {
    const result = [];
    //loop through arr
    //set the sum to be the index
    //loop through arr
    //check if they are equal
    //if equal slice the arr
    //if not, keep adding
    for(let i =0; i < nums.length;i++) {
        let sum = nums[i]
        for(let j=i+1; j < nums.length; j++) {
            if(sum === target) {
                result.push(nums.slice(i,j))
            }
            sum += nums[j]
        }
    }
    return result
}

console.log(findConsecutive(nums, sum));
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const nums = [1,10,8,3,5,7,9,11,13,15,2]

function basicLoop(nums) {
    for(const num in nums) {
        console.log(nums[num],'basic normal loop')
    }
    for(let i=nums.length-1; i >=0; i--) {
        console.log(nums[i],'backwards')
    }
}
basicLoop(nums)

function prac(nums) {
    for(const num in nums){
        nums[num]++
    }
    return nums
}

const newNews = prac(nums);
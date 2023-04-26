const nums = [ 1,2,3,4,6,7,8,10]

//output = { i: 4, n: 6 }, { i: 7, n: 10}
//where i = index, n = the value/num at index

function nonConsecutive(nums) {
    const result = []
    for(let i = 1; i <nums.length; i++) {
        let curr = nums[i]
        let prev = nums[i-1];
        if(curr - prev !== 1) {
            result.push([
                { i: i, n: curr }
            ])
        }
    }
    return result
}

console.log(nonConsecutive(nums));
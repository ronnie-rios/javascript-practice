
const search = function(nums, target) {
    return nums.indexOf(target)
}

var search2 = function(nums, target) {
    let start = 0
    let end = nums.length -1
    
    while(start <= end) {
        let middle = Math.floor((start + end) /2)
        
        if(target ===nums[middle]) {
            return middle
        } else if (nums[middle] < target) {
            start = middle + 1
        } else {
            end = middle -1
        }
        
    }
    return -1
};
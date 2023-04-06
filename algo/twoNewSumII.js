var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        first =nums[i];
        for(let j=1; j<nums.length; j++) {
            second=nums[j]
            if(first+second===target && i!== j) {
                return [i, j]
            }
        }
    }
   
};

//returning the indices ofrom an arr that match the target sum
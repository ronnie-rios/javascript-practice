const nums = [1,2,3,3]
//should return true;
const noDupe = [1,2,3,4]

function hasDuplicate(nums) {
 ///codehere
 for(let i =0;i<nums.length;i++) {
  let curr=nums[i]
  for(let j=i+1; j<nums.length;j++) {
    let next = nums[j]
    if(curr === next) {
      return true
    }
  }
 }
 return false
}

function duplicate(nums) {
  //build an object
  //initialize empty obj (hashmap)
  const map = {};
  //loop thru thru, only need one loop
  for(let i=0; i < nums.length;i++) {
    //check if it's there, if it's not there value = 1
    //object tracking the frequency where the key is the array val, obj val is the frequency
    //map[nums[i]] map[key], the value of the key is gonna be nums[i]
    //map[1] | { '1': }
    if(!map[nums[i]]) {
      map[nums[i]] = 1; //setting the key of the obj  to the value in the arr
    } else {
      map[nums[i]]++;
      return true
    }
  }

  //loop thru the obj
return false;
}



// const result = hasDuplicate(nums);
// const result2 = hasDuplicate(noDupe);

 const result3= duplicate(nums);
 const result4 = duplicate(noDupe);
// console.log(result, result2, 'double for loop');
console.log(result3, result4 ,'with map');
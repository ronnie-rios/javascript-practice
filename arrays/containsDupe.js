//given an integer arry, nums, return true if any value appears at least twice in the arr, return false
const nums = [1,2,3,1] // output true
const falseArr =[1,2,3,4]
const containsDuplicate = (nums) => {
  //kinda ugly brute force 
  let track = 0;
  const sorted = nums.sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
      let curr = sorted[i];
      let next = sorted[i + 1]
      if (curr === next) {
          track++
      }
  }

  return track >= 1 ? true : false
};

const containsDupe = (nums) => {
  const seen = new Set();

  for (let num of nums) {
      if (seen.has(num)) {
          return true;
      } else {
          seen.add(num);
      }
  }

  return false;
}
//1 1=2
//2=3

const dupe3 = (nums) => {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
      if (seen[nums[i]]) {
          return true;
      } else {
          seen[nums[i]] = true;
      }
  }

  return false;

}


console.log(containsDupe(falseArr), 'should be false');
console.log(containsDupe(nums), 'should be true');
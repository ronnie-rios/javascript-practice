//given an arr of int numbs, and an int target, return indicies of the the two nums that add to target
// nums - [2,7,11,15], target = 9 output = [0,1]
const nums: number[] = [2, 7, 11, 15];
//const target: number = 9
type answer = number[];

function twoSum(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
	return [];
}

console.log(twoSum(nums, 9));


function reverse(x: number): number {
  const arrStr: string = x.toString().split('').reverse().join()

  return parseInt(arrStr)
}

console.log(reverse(331));
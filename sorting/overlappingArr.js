const nums1 = [0, 1, 2, 2, 7];
const nums2 = [2, 2, 5, 5, 7];
const expected = [2, 7];

function overlap(nums1, nums2) {
  const result = [];
  const final = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums2[j]);
      }
    }
  }
  const set = new Set(result);
  set.forEach((item) => final.push(item));
  return final;
}
console.log(overlap(nums1, nums2));

// function overlap2(nums1, nums2) {
//   const map1 = {};
//   const map2 = {};
//   for (let i = 0; i < nums1.length; i++) {
//     map1[nums1[i]] = 1;
//     for (let j = 0; j < nums2.length; j++) {
//       if (parseInt(map1[nums1[i]]) === nums2[j]) {
//         map1[nums1[i]]++;
//       }
//     }
//   }
// //   console.log(parseInt(map1[nums1[1]]));
// console.log(map1);
// }

// overlap2(nums1, nums2);

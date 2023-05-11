const nums1 = [1,2,2,2,7];
const nums2 =  [2, 2, 6, 6, 7];
//expected = [1,2,2,2,6,6,7]

function orderMult(nums1, nums2) {
    //create an obj for each to track count
    const obj1 = createObj(nums1)
    const obj2 = createObj(nums2)
    console.log(obj1,obj2);
    //create an array to hold
    const result = [];
    for(key in obj1) {
        if(!obj1[key] || obj1[key] <= obj2[key]) {
            obj1[key] = obj2[key]
        }
    }
    console.log(obj1, 'combined');
    //loop thru each obj and compare each
    for(key in obj1) {
        for(let i =0; i < obj1[key]; i++) {
            result.push(parseInt(key))
        }
    }
    return result;
}

function createObj(arr) {
    const map = {}
    for(let i=0; i <arr.length;i++) {
        if(!map[arr[i]]) {
            map[arr[i]] = 1
        } else map[arr[i]]++
    }
    return map;
}
console.log(orderMult(nums1,nums2));
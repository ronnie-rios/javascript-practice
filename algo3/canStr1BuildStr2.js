const str1 = "hello world";
const str2 =  "lloeh wordl";
//expected true
const str3 = "hif";
const str3b = "hisdfsdfppo";
const expected5 = true;

const str4 = 'hello';
const str4b = 'heloxyz'

function check(str1, str2) {
  const chars1 = str1.toLowerCase();
  const chars2 = str2.toLowerCase();
  const map = {};
  //if str1 has less chars, false
  if (str1.length < str2) {
    return false;
  }
  //make map for str1
  for(let char of chars1) {
    map[char] = (map[char] || 0) + 1
  }
  //loop through str, if that str matches the key in map, decrement,
  //decrement cause we know it exists in both strs
  for(let char of chars2) {
    if(map[char]) {
      map[char]--
    }
  }
  //make an array of the values, if the array of the values is greater than 0,
  //then we know that str1 cant build str2
  for(let count of Object.values(map)) {
    console.log(map);
    if(count > 0) {
      return false
    }
  }
  return true

}

function createMap(str) {
    const map = {};
    for(let char of str) {
      map[char] = (map[char] || 0) + 1
    }
    return map
}


console.log(check(str1, str2));
console.log(check(str3, str3b));
const str1 = "hello world";
const str2 = "hello world";
//expected true
const strI = "hello";
const strII = "hi";
//expected false

function check(str1, str2) {
  if (str1.length < str2) {
    return false;
  }
  const map1 = createMap(str1);
  const map2 = createMap(str2);
  console.log(map1, map2);
 

  
}

function createMap(str) {
    const map = {};
    for(let i=0;i <str.length;i++) {
        if(!map[str[i]]) {
           map[str[i]] = 1
        } else {
           map[str[i]]++
        }
    }
    return map
}


check(str1, str2)
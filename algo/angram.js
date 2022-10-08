//check if two provided strings are anagrams of eachother
//only chars, no spaces nor spaces
//capital = lowercase


function anagrams(stringA, stringB) { 
    //create a char map
    const aChar = buildCharMap(stringA);
    const bChar = buildCharMap(stringB);
    console.log(aChar, bChar)
    if (Object.keys(aChar).length !== Object.keys(bChar).length) {
        return false;
    }
    //in for obj, of for arrays
    for (let char in aChar) {
        if (aChar[char]!== bChar[char]) {
            return false
        } else {
            
        }
    }
    return true;
}

//helper func
function buildCharMap(str) {
    const charMap = {};
    
    for(let char of str.toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;

}
//.replace(/[^\w/g,""]/)


console.log(anagrams('momo', 'moom'));

function anagrams2(strA, strB) {
    return cleanString(strA) === cleanString(strB)
}

function cleanString(str) {
    return str.replace(/[^\w/g,""]/).toLowerCase().split('').sort().join('')
}



const isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const sCount ={}
    const tCount = {}
   
    for(let i=0; i < s.length; i++) {
        if(!sCount[s[i]]) {
            sCount[s[i]] = 0
        }
        if(!tCount[t[i]]) {
            tCount[t[i]] = 0
        }
        sCount[s[i]]++
        tCount[t[i]]++
    }
    for (let char in sCount) {
        if(sCount[char]!==tCount[char]) return false
    }
    return true
};
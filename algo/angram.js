//check if two provided strings are anagrams of eachother
//only chars, no spaces nor spaces
//capital = lowercase


function anagrams(stringA, stringB) { 
    //create a char map
    const aChar = buildCharMap(stringA);
    const bChar = buildCharMap(stringB);
    if (Object.keys(aChar).length !== Object.keys(bChar)) {
        return false;
    }
    //in for obj, of for arrays
    for (let char in aChar) {
        if (aChar[char]!== bChar[char]) {
            return false
        }
    }
    return true;
}

//helper func
function buildCharMap(str) {
    const charMap = {};
    
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;

}


console.log(anagrams('momo', 'moom'));

//.replace(/[^\w/g,""])
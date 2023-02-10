//given a str, return char most commonly used in a str

//maxChar('abcccccd') === 'c'

function maxChar(str){
    let charMap = {}
    let max =0
    for(let i =0; i <str.length; i++) {
        
        if(!charMap[str[i]]) {
            charMap[str[i]] = 1
        } else {
            charMap[str[i]]++
        }
    }
    for(char in charMap) {
        console.log(char);
        console.log(charMap);
        console.log(charMap[char]);
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
    console.log('charmap', charMap)
    return maxChar
}
console.log('-----------');
console.log(maxChar('abcccccd'))
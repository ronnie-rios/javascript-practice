//given a str
//return the char that is most common in that string

//this solution is good for counting reoccuring chars
//turn into an object
//properties = letters, value = occurance
//compare two strings, compare the new objects

const str = 'momo world'

function maxChar(str) {
    const charMap = {};
    //if we find a char that has more uses than max, max will now equal new value
    let max =0;
    //char that was responsibil for that # of uses
    let maxChar = '';
    //for of loop, for every char add it as a property, if seen add 1 to value
    for (let char of str) {
        //reference to its value
        //if nothing exists at this case, set it to 1 (first time it appears)
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            //if it exist, increment its value
            charMap[char]++;
        }
        //refactor to a 1 liner
        //charMap[char] = charMap[char] + 1 || null;
    }
    //char will be the letters in our obj
     for(char in charMap) {
        if (charMap[char] > max) {
            max= charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(maxChar(str))
console.log(maxChar(str))
//give a string, return the char
//most commonly used inthe string
//ex: maxChar('momozingo') === 'o'
//maxChar('plum111123') === '1'

//plan - the str into obj and the key/values = letter and num occurs
//if value is greater than 1, that means there are repeating chars
function maxChar(str) {
    //intialize empty obj
    const chars = {}
    let max = 0
    let maxChar = ''
    //for loop
    for (let char of str) {
        //if there is a char with a char
        if (chars[char]){
            //add1
            chars[char]++
        } else {
            //itll be 1
            chars[char] = 1
        }
    }
    //obj loop
   for (let char in chars) {
    //if the value in obj > 1
    if (chars[char] > max) {
        //set the number value to max variable
        max = chars[char]
        console.log(max)
        //set it to a str
        maxChar = char
        console.log(maxChar)
    }
   }
   return maxChar
}
console.log(maxChar('momozingo'))

//other examples
//what is most common char
//does a have the same char as str b
//does the given string have any repeated chars in it
function reverseString(str) {
    //split turns to arr => reverse => join by '' from str to arr
    return str.split('').reverse().join('')
}
   
reverseString("hello");

//no reverse method
function reverseString2(str) {
    //create an empty str
    let reverseStr = ''
    //for a temp variable redclared thru loop, and it iterates thru str
    //so for each char of str 1 by 1, and set it to that temp variable in ()
    for(let char of str){
        reverseStr = char + reverseStr
    }
    console.log(reverseStr)
    return reverseStr
}
reverseString2('tikzib')

//no reverse version 2
function reverseStr3(str){
    //turn into arr
    //reduce into single value
    //reversed str first, then our arr
    //set char into reversed
    //will return a string 
    return str.split('').reduce((reversed, char) => {
        return char + reversed
    }, '')
}
reverseString3('tikzib')
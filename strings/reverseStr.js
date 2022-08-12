function reverseString(str) {
    //split turns to arr => reverse => join by '' from str to arr
    return str.split('').reverse().join('')
}
   
reverseString("hello");

//es6
const fancyReverse = str => [...str].reverse().join('');

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

function reverseStr4(str) {
    if (!str || str.length <2 || typeof str !=='string') {
        return 'not good'
    }
    const reverse = [];
    const length = str.length -1;

    for(let i = length; i >= 0; i--) {
        reverse.push(str[i]);
    }

    return reverse.join('');
}

console.log(reverseStr4('tikzib'))
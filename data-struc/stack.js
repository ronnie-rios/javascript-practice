//last book u put on top, is first book u take off 
//push adds to the top of stack
//pop pops off

//stack
//put letters into our stack
//start at 0; go length, index is the char of the str

function stackPalindrome(str) {
    const lettersArr = []
    let reverseWord = ''
    for (let i = 0; i < str.length; i++) {
        lettersArr.push(str[i])
    }
    
    //creating the reverse word
    for (let i =0; i < str.length; i++) {
        reverseWord += lettersArr.pop()
    }
    
    if (reverseWord === str) {
        console.log(str + ' is a palindrome')
    } else {
        console.log(str + ' is not a palindrome')
    }
}

stackPalindrome('racecar')
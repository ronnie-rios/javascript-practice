function palindrome(str){
    const reverse = str.split('').reverse().join('')

    return str === reverse
}

palindrome('bizkit')

//clear solution but doing twice the work it needs to
function palindrome2(str){
    let strArr = str.split('')
    //first arg is element, second is the index
    //whye str.length -1 -i for the str[index]
    //if you have an arr of length of 6
    //and youre checking the index of 1 [which is 2nd item in arr]
    //need to compare it to index of 4 [which is 5th item] but length of str is 6 
    //6 - 1 is 5, which is the wrong index,need 4, so the extra -1 is needed
    console.log(strArr.every((char, i)=> {
        return char === str[str.length - i - 1]
    }))

}
palindrome2('ajax')
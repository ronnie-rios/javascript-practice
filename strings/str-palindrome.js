function palindrome(str){
    const reverse = str.split('').reverse().join('')

    return str === reverse
}

palindrome('bizkit')
function reverseString(str) {
    //split turns to arr => reverse => join by '' from str to arr
    return str.split('').reverse().join('')
   }
   
   reverseString("hello");
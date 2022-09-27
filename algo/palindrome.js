function checkPalindrome(first, second) {
    let firstStringArrNoSpace = []
    let secondStringArrNoSpace = []
    //account for spaces
    firstStringArrNoSpace.forEach(ele => {
        if(ele !== " ") {
            firstStringArrNoSpace.push(ele)
        }
    })
    secondStringArrNoSpace.forEach(ele => {
        if(ele !== " ") {
            secondStringArrNoSpace.push(ele)
        }
    })

    //set parameters to an arr
    firstStringArrNoSpace = first.toLowerCase().split("").sort().join("")
    secondStringArrNoSpace = second.toLowerCase().split("").sort().join("")

    if(firstStringArrNoSpace === secondStringArrNoSpace) {
        console.log("you got an palindrom")
    } else {
        console.log("not an palindrom")
    }

}

checkPalindrome("ronnie","einnor")

function palindrome2(str) {
    //check
    //every does a boolean check
    return str.split('').every((char, index) => {
        //for char compare to itself
        return char === str[str.length - index - 1];
    });
};

console.log(palindrome2('racecar'));
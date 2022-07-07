function checkAnagram(first, second) {
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
        console.log("you got an anagram")
    } else {
        console.log("not an anagram")
    }

}

checkAnagram("ronnie","einnor")
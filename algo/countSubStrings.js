//problem 647
//return how many palindromes from a sub string
// "abc" will return 3
// "aaa" will return 6
const countSubStrings = (s) => {
    //initialize the count
    let count = 0;
    //split the string into an arr
    let arr = s.split('')
    //loop through the arr
    arr.forEach((element, index) => {
        count++
        if(ele == arr[index]) {
            count++
        }
    });
    if (arr.join('') == arr.reverse().join('')) {
        count ++
    }
    console.log(count)
}

countSubStrings('aaa')
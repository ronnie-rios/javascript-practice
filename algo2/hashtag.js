function generateHashtag (str) {
    let arr = str.split(' ')
    if (str.length === 0 || str.length > 140) {
       return false
      } else {
        for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
        }
      }
    let msg = arr.join('')
    console.log(arr);
    let newStr = '#' + msg
    console.log(newStr)
    return newStr
}

generateHashtag('momo is the best')
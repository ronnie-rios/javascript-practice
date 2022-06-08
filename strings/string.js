let text = 'abcdefghijklmnopqrstuvwxyz'
//measuring the length of a string. should be 26
let length = text.length
console.log(length)

//extracting string parts
//slice() extracts part of a string and returns the extracted part in a new string
let fruits = 'Apple, kiwi, pineapple'
let section = fruits.slice(7, 13)
console.log(fruits)

//replace
let location = 'visit Seattle'
let newLocation = location.replace('Seattle', 'Portland')
// replaces the first matching string value, returns new string, case-sensitive
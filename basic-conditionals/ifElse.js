const obj1 = { name: 'momo'}
const obj2 = { name: 'momo'}

const check = () => {

    if (obj1 === obj2) {
        return 'true'
    } else {
        return 'false'
    }
}
//objects are reference types, even if the key/value pairs are same, when comparing it false
console.log(check())
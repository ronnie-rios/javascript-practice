const haystack = [0,10,29,33,171,3,99]
const needle = 10

function linear(haystack, needle) {
    for (let index = 0; index < haystack.length; index++) {
        const element = haystack[index];
        if (element === needle) {
            return true;
        }
    }
    return false;
}

console.log(linear(haystack, needle));
function vowels(str) {
    const a = 'a';
    const e = 'e';
    const i = 'i';
    const o = 'o';
    const u = 'u';
    
    let vowels = 0;

    for (const char of str) {

        if(char === a || char === e || char === i || char === o || char === u) {
          
            vowels++
        } 
    }
    return vowels

}
console.log(vowels('hi momo'));

function vowelsBetter(str) {
    let count = 0;
    const checker = ['a','e','i','o','u'];

    for(let char of str) {
        if(checker.includes(char)) {
            count++
        }
    }
    return count;
}

console.log(vowelsBetter('hi momo'))
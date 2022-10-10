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
console.log(vowels('hi momo'))
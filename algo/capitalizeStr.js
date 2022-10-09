function capitalize(str) {
   const words= []

   for (let word of str.split(' ')) {
    
    words.push(word[0].toUpperCase() + word.slice(1));
    
   }
   console.log(words)
   return words.join(' ') 
}

//helpful methods
//slice()

capitalize('the momo world');

//create empty str called result with first char capitalized
//for each char in string
//if char left to space, capitalize
//else add it to 'result'
function bruteForceCapital(str) {
   let result = str[0].toUpperCase();

   for(let i =1; i < str.length;i++) {
      if (str[i-1] ===' ') {
         result += str[i].toUpperCase();
      }
      result += str[i];
   }
   console.log(result, 'brute force')
   return result
}

bruteForceCapital('the momo world')
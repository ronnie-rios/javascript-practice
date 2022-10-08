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
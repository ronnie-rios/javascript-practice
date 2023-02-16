function shortestWordLength(str) {
    // Split the string into an array of words
    const words = str.split(" ");
    
    // Initialize the shortest length to be the length of the first word
    let shortestLength = words[0].length;
    
    // Loop through the remaining words and update the shortest length if a shorter word is found
    for (let i = 1; i < words.length; i++) {
      const currentLength = words[i].length;
      if (currentLength < shortestLength) {
        shortestLength = currentLength;
      }
    }
    
    // Return the shortest length
    return shortestLength;
  }
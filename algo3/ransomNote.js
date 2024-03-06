function  ransomeFunc(ransomNote, magazine) {
  const magMap = {}
  //create the map
  for(let i = 0; i < magazine.length; i++) {
      let char = magazine[i]
      if(magMap[char]) {
          magMap[char]++
      } else {
          magMap[char] = 1
      }
  }
  //loop throguh the str and 
  for(let i=0; i < ransomNote.length;i++) {
      let char = ransomNote[i]
      if(magMap[char] === 0 || !magMap[char]) {
          return false
      }
      magMap[char]--
      
  }
 return true
};

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
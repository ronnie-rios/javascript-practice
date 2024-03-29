//takes in a string, returns a boolean if all () {} [] match

const validParentheses = function(s) {
    //check if nothing or if odd length str
    if (s.length ==0 || s.length%2 != 0){
        return false;
    }
    //map of keys to check
    const checkMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    //arr to hold our check
    const stack = [];
    //loop through each char in our str
    for (char of s) {
        //if exists in  checkmap
        if (char in checkMap) {
            //add to stack
            stack.push(char);
            //if not remove return false
        }else if( char!== checkMap[stack.pop()]) {
            return false;
        }
    }
     return stack.length === 0;
   
};
// for only parentheses not {} || []
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }
//takes in a string, returns a boolean if all () {} [] match

const validParentheses = function(s) {
         
    if (s.length ==0 || s.length%2 != 0){
        return false;
    }
    
    const checkMap = ({
        "(": ")",
        "{": "}",
        "[": "]"
    });
    
    const stack = [];
    
    for (char of s) {
        if (char in checkMap) {
            stack.push(char);
        }else if( char!== checkMap[stack.pop()]) {
            return false;
        }
    }
     return stack.length === 0;
   
};
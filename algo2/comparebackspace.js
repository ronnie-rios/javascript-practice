function process(S, T) {
  const stackS = [];
  const stackT = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== "#") {
      stackS.push(S[i]);
    } else if (stackS.length > 0) {
      stackS.pop();
    }
  }

  for (let i = 0; i < T.length; i++) {
    if (T[i] !== "#") {
      stackT.push(T[i]);
    } else if (stackT.length > 0) {
      stackT.pop();
    }
  }

  return stackS.join("") === stackT.join("");
}

function helper(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      stack.push(s[i]);
    } else if (stack.length > 0) {
      stack.pop();
    }
  }
  return stack.join("");
}

// Example usage:
const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
console.log(process(S3, T3));
const S4 = "a#c";
const T4 = "b";
const expected4 = false;
console.log(process(S4, T4));

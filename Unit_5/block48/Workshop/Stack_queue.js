// Question 1
// Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions: 

//   The opening brackets: 

//   - Must match with the corresponding closing brackets of the same type 
  
//   - Must be closed in the correct order 
  
//   - Should have a corresponding opening bracket of the same type 

const s = "({[{]})";

function correctChar(s) {
const stack = [];
    for (const char of s) {
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else {
            let openingChar = stack.pop();
            if(char === ")" && openingChar === "(" ) {
                continue
            } else if (char === "}" && openingChar === "{" ) {
                continue
            }else if (char === "]" && openingChar === "[" ) {
                continue
            } else {
                return false;
            }
        }
    }
if (stack.length === 0) {
    return true;
} else {
    return false;
}
}

console.log(correctChar(s));
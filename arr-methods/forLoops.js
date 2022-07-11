//for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
//The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. 
//When the condition is false at the start of the iteration, the loop will stop executing
// initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression
const ourArray = [];

function loopExample(){
    //initial start = 0
    //go until 5
    //increase by 1
    for (let i = 0; i < 5; i++) {
        //push i into the empty arr
        ourArray.push(i);
        //view log as each item gets pushed up until 5
        console.log(ourArray)
    }
    //view log when complete
    console.log(ourArray)
}
loopExample()


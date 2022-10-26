//make a peek
//implement the weave as arguments and combines the contents of
// each into a new third queue
//the third queue should containthe alterating content of 
// the two queues, functions should handle queues of diff lengths
//witout inserting
//DO NOT access the array inside of a queue, use only add, remove, peek

const Queue = require('./queue');


function weave(sourceOne, sourceTwo) {
    //create a new queue to store
    const q = new Queue()
    //while it returning something
    while(sourceOne.peek() || sourceTwo.peek() ) {
        //still have to make sure something exists
        if(sourceOne.peek()) {
            q.add(sourceOne.remove());
        }
        if(sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q;
}
//implement a queue from a stack

const Stack = require('../stacks/stackbuild');

//turn two stacks into a queue, stacks are FILO, queues are FIFO
//records popped from stack one will go to stack two

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    } 
    remove() {
        while(this.first.peek()) {
            //getting the record removed from the first
            const record = this.first.pop();
            //adding the popped off record from 1 to 2
            this.second.push(record)
        }
    }
}
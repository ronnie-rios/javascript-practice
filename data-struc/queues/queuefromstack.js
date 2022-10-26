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

        const record = this.second.pop()
        //doing from second
        while(this.second.peek()) {
            //one record add a time and add to first
            this.first.push(this.second.pop())
        }
        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
        //ref
        const record = this.second.peek();
        while(this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return record
    }
}
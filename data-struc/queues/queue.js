//data structs
//ways of organizing info w/ optimal runtime complexity for adding and removing records

//js has some natively, often questions asked about inferior data structs

//queues, enqueuing = adding | dequeuing = removing
//FIFO = first in first out

class Queue {
    //when new class created constructor will be built
    constructor() {
        //store the data for our queue
        this.data = [];
    }
    //add to front
    add(record) {
        this.data.unshift(record);
    }
    remove() {
       return this.data.pop()
    }
    peek() {
        this.data[this.data.length - 1]
    }
};

module.exports = Queue;
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    //return first item in line
    peek() {
        return this.first;
    }
    //add to the queue, to the end
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            //point to new node to last
           this.last.next = newNode
           //now it's set to last
           this.last = newNode
        }
        this.length++
        return this
    }
    //removes the first item in the list
    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last = null;
        }
        //whoever is first is now set to the next node in line
        this.first = this.first.next
        this.length--
        return this
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('bizkit')
  myQueue.enqueue('ajax')
  myQueue.enqueue('momo')
  myQueue.dequeue()
console.log(myQueue);
  
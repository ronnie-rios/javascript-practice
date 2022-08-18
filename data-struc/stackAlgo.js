class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            //old top will be after new node
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }
    pop() {
        if (!this.top) {
            return null
        }
        if (this.length === 0){
            this.bottom = null
        }
        //const holdingPointer = this.top;
        //set it to the prev one
        this.top = this.top.next;
        this.length--
        return this
    }
    //isEmpty
}
  
  const myStack = new Stack();
  myStack.push(15)
  myStack.push(25)
  console.log(myStack);

class ArrStack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
      }  
}
  
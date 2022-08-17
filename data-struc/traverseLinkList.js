class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
//A => B => C => D => E => null
a.next = b
b.next = c
c.next = d
d.next = e

const printList = (head) => {
    //starting at beginning
    let current = head;
    //if it exists keep going
    while (current != null) {
        console.log(current.value);
        //update the pointer
        //first log it, then set the current to the current.next 
        current = current.next
    }
}

printList(a)

const recursivePrint = (head) => {
    //if it null stop
    if (head===null) return;
    //log the head
    console.log(head.value);
    //class itself to set the head to the next
    //so it points to the next cause a is the head
    //then a points to b etc.
    recursivePrint(head.next)
}

recursivePrint(a)
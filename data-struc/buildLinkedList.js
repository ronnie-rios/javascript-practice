//example
// let myList = {
//     head: {
//         value: 10,
//         //pointer
//         next: {
//             value: 5,
//             next: {
//                 value: 15,
//                 next: null
//             }
//         }
//     }
// }
 //creating empty node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        //create
       const newNode = new Node(value)
        //points to new node
        this.tail.next = newNode;
        //then the tail is equal to null cause its assigned above
        this.tail = newNode;
        this.length++
        return this
    }
    prepend(value) {
        //create
        const newNode = new Node(value)
        //pointing to the head or first item
        newNode.next = this.head
        //now the head will update with new value
        this.head = newNode
        //increment
        this.length++
        return this
    }
}
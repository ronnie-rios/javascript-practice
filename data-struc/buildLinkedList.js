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
    printList() {
        //empty arr
        const arr = []
        //get the value
        let currentNode = this.head
        //while there is no null
        while(currentNode !==null) {
            //push the value to the head
            arr.push(currentNode)
            //then set thehead to the pointer
            currentNode = currentNode.next
        }
        return arr
    }
    //first node is "leader"
    //point to 'old node' that was originally conneted to leader
    insert(index, value) {
        //check the length
        if (index >= this.length) {
            //add to the end
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.traversToIndex(index-1);
        const holdPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdPointer
        this.length++
        return this.printList()
    }
    traversToIndex(index) {
        //loop though o(n)
        let counter = 0;
        let currentNode = this.head;
        //go from head to counter till it = index
        while(counter !== index) {
            //keep moving the node
            currentNode = currentNode.next
            counter++
        }
        return currentNode;
    }
    remove(index) {
        //check params
        //find
        const leader = this.traversToIndex(index - 1)
        // = the node after the unwanted
        const unwantedNode = leader.next
        //set it
        leader.next = unwantedNode
        this.length--
        return this.printList()

    }
}

const myLinkedList = new LinkedList(15);
myLinkedList.append(5)
myLinkedList.prepend(3)
myLinkedList.insert(1, 8)
console.log(myLinkedList.printList())
//console.log(myLinkedList);
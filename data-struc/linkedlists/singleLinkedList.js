class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * SLL(Singly Linked List)
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
  constructor() {
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    //create a new node, with head
    const newNode = new ListNode(data);
    //check if its empty
    if (this.isEmpty()) {
      //if empty then we set the head to new node
      this.head = newNode;
    } else {
      //create a current
      let current = this.head;
      //this current will traverse the list as long as the next exists
      while (current.next) {
        //if it does, then set the current to next, so it moves
        current = current.next;
      }
      //finally set it to new node once it at end
      current.next = newNode;
    }
  }
  //given
  printList() {
    this.head
      ? console.log("head:" + this.head.data)
      : console.log(`empty list`);

    let current = this.head;
    //while there is data
    while (current) {
      console.log(current.data);
      //set the current equal to the next node
      current = current.next;
    }
  }
  insertAtFront(data) {
    // [2 | 3] - [3 ] current list
    //instantiate the new node
    const newNode = new ListNode(data); //data = [1]
    //[1] set the next to the current head
    //[ 1 | 2] the 2 is the old head, but now it's the next of our new node
    newNode.next = this.head;
    //set the head = the data
    this.head = newNode; // now the 1 is at the start, with its next pointing to old head
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // remove the last node of a SLL
  removeBack() {
    //create our runner
    let current = this.head;

      //if only 1 remove it
    if(!current.next) {
      this.head = null;
      return;
    }

    //while current exists
    while(current) {
      //check if the next . next = null
      if(current.next.next === null) {
        //set our curr to null
        current.next = null
      }
      current = current.next;
    }
  }

  // BONUS
  average() {
    // loop through the SLL
    //find the average of all nodes
  }

  removeHead() {
    if (this.isEmpty()) {
      return null;
    }
    //set the head
    const oldHead = this.head; // set it to the head
    this.head = oldHead.next; // overwrite the head with the next node
  }
}

const node1 = new ListNode(3);
const node2 = new ListNode(5);
const node3 = new ListNode(8);

node1.next = node2;
node2.next = node3;

const emptyList = new SLL();

const list1 = new SLL();
list1.head = node1;

list1.insertAtBack(3);
list1.insertAtBack(5);
list1.insertAtBack(8);
list1.printList();
list1.isEmpty();

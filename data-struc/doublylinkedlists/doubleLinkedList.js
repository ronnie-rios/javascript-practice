class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    toArray() {
        const vals = [];
        let runner = this.head;

        while(runner) {
            //add the values to the array
            vals.push(runner.data);
            //set the runner to next;
            runner = runner.next;
        }
        return vals;
    }

    insertAtBack(data) {}

    insertAtFrontdata() {}

    insertBefore(targetVal, newVal) {}

    insertAfter(targetVal, newVal) {}
}
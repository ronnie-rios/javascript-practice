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

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while(current != null) {
        sum += current.value
        current = current.next
    }
    return sum
}


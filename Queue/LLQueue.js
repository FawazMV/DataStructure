const {LinkedList} = require("../Linked List/QueueStackLinkedList")

class Queue {
    constructor() {
        this.items = new LinkedList();
    }
    enqueue(item) {
        this.items.append(item);
    }
    dequeue() {
        return this.items.removeFront()
    }
    peek() {
        return this.items.peek()
    }
}

const q = new Queue
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

console.log(q.peek())
console.log(q.dequeue())
console.log(q.peek())
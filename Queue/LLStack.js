const { LinkedList } = require("../Linked List/QueueStackLinkedList")


class Stack {
    constructor() {
        this.items = new LinkedList()
    }
    push(value) {
        this.items.prepend(value)
    }
    pop() {
       return this.items.removeFront()
    }
    peek() {
        return this.items.peek()
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.peek())

console.log(stack.pop())

console.log(stack.peek())
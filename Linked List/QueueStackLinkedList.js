class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

exports.LinkedList = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
            return
        }
        this.tail.next = node;
        this.tail = node
        this.size++
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
            return
        }
        node.next = this.head
        this.head = node
        this.size++
    }

    removeFront() {
        if (!this.head) return undefined
        const value = this.head
        this.head = this.head.next
        this.size--
        if (!this.size) this.tail = null
        return value.value
    }

    peek(){
        return this.head.value
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
    isEmpty() {
        return this.size === 0
    }
    print() {
        let current = this.head;
        let result = ''
        while (current) {
            result += current.value + " "
            current = current.next
        }
        console.log(result)
    }
    getLast() {
        console.log(this.tail.value)
    }
    peek() {
        console.log(this.head.value)
    }
}

const li = new List
li.append(1)
li.append(2)
li.append(3)
li.append(4)
li.append(5)
li.append(6)

li.print()
li.getLast()
li.peek()



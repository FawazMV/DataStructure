class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Doubly {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const node = new Node(value);
        this.length++
        if (!this.tail) {
            this.head = this.tail = node;
            return
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }
    debug() {
        let result = ''
        let curr = this.head
        while (curr) {
            result += curr.value + ' '
            curr = curr.next
        }
        console.log(result)

        let resultp = ''
        let currp = this.tail
        while (currp) {
            resultp += currp.value + ' '
            currp = currp.prev
        }
        console.log(resultp)
    }
}

const d = new Doubly()
d.append(1)
d.append(2)
d.append(3)
d.append(4)
d.debug()
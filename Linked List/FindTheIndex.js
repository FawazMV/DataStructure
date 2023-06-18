class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        this.length++
        const node = new Node(value);
        if (!this.tail) {
            this.head = this.tail = node;
            return
        }
        this.tail.next = node;
        this.tail = node
    }

    search(value) {
        let curr = this.head
        let index = 0
        let diff = Infinity
        let pos
        while (curr && index < this.length) {
            if (curr.value === value) return index
            if (value - curr.value - value < diff && value - curr.value >= 0) {
                pos = index
                diff = value - curr.value
            }
            curr = curr.next
            index++
        }
        return pos+1
    }
}

const l = new LL

l.append(1)
l.append(2)
l.append(3)
l.append(5)
l.append(7)
l.append(9)
l.append(10)

console.log(l.search(10))
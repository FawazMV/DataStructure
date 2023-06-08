class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null
    }
    prepend(value) {
        const node = new Node(value);
        if (this.head === null) this.head = node
        else {
            node.next = this.head
            this.head = node
        }
    }
    append(value) {
        const node = new Node(value)
        if (this.head === null) this.head = node
        else {
            let temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = node
        }
    }

    insert(index, value) {
        if (index === 0) return this.prepend(value)
        else if (index >= this.getLength() || index < 0) return console.log('indvalid index')
        else {
            const node = new Node(value)
            let i = 0;
            let curr = this.head;
            while (i < index - 1) {
                curr = curr.next
                i++
            }
            node.next = curr.next
            curr.next = node
            return
        }
    }

    delete(index) {
        if (index === 0) this.head = this.head.next
        else if (index < 0 || index >= this.getLength()) return
        else if (index) {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            curr.next = curr.next.next
        }
    }

    getLength() {
        let length = 0
        let temp = this.head
        while (temp) {
            temp = temp.next
            length++
        }
        return length
    }

    find(value) {
        let curr = this.head
        for (let i = 0; i < this.getLength(); i++) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
        }
        return -1
    }

    reverse() {
        let curr = this.head
        let prev = null
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        this.head = prev
    }
    print() {
        let temp = this.head
        let value = ''
        while (temp) {
            value += temp.value + " "
            temp = temp.next
        }
        console.log(value)
    }

    recursive() {
        return this.reverseHelper(null, this.head)
    }
    reverseHelper(prev, curr) {
        if (!curr) return this.head = prev
        let temp = curr.next;
        curr.next = prev;
        this.reverseHelper(curr, temp)
    }
    reverseAfter(index) {
        let curr = this.head
        let i = 0
        while (i < index) {
            i++
            curr = curr.next
        }
        let temp = curr
        curr = curr.next
        let prev = null
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        temp.next = prev
    }

    merge() {
        let curr = this.head
        let result = ''
        while (curr) {
            result += curr.value
            curr = curr.next
        }
        return result
    }
}

const list1 = new List
const list2 = new List

list1.append(1)
list1.append(2)
list1.append(3)

list2.append(5)
list2.prepend(4)
list2.append(6)

const newList = new List
const task = (list1, list2) => {
    list1.reverse()
    list2.reverse()
    let l1 = list1.merge()
    let l2 = list2.merge()
    const result = (+l1) + (+l2)
    for(let x of String(result)) {
        newList.prepend(x)
    }
}

task(list1, list2)
newList.print()

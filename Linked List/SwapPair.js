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

    swap() {
        this.head = this.swapHelper(this.head)
    }
    swapHelper(head) {
        if (!head || !head.next) return head
        let v1 = head
        let v2 = head.next
        let v3 = v2.next
        v2.next = v1
        v1.next = this.swapHelper(v3)
        return v2
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

}

const list1 = new List

list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
list1.append(5)
list1.append(6)

list1.swap()
list1.print()
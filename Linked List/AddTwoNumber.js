
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
const list2 = new List

list1.append(2)
list1.append(4)
list1.append(3)

list2.append(5)
list2.append(6)
list2.append(4)


function AddTowNumbers(list1, list2) {
    let carry = 0
    let l1 = list1.head
    let l2 = list2.head

    while (l1 || l2) {
        let val1 = l1?.value ?? 0
        let val2 = l2?.value ?? 0

        let sum = val1 + val2 + carry

        carry = Math.floor(sum / 10)

        newList.append(sum % 10)

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry) {
        newList.append(carry)
    }
}

const newList = new List
AddTowNumbers(list1, list2)


newList.print()

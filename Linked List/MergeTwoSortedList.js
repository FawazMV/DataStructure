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

list1.append(1)
list1.append(5)
list1.append(8)

list2.append(2)
list2.append(6)
list2.append(8)
list2.append(9)

const newList = new List
const task = (list1, list2) => {
    let l1 = list1.head
    let l2 = list2.head
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.value < l2.value) {
                newList.append(l1.value)
                l1 = l1.next
            } else {
                newList.append(l2.value)
                l2 = l2.next
            }
        }
        else if(l1){
            newList.append(l1.value)
            l1 = l1.next
        }else{
            newList.append(l2.value)
            l2 = l2.next  
        }
    }

}

task(list1, list2)
newList.print()

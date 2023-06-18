class MinHeap {
    constructor() {
        this.heap = []
    }
    getLeftChild(i) {
        return (i * 2) + 1
    }
    getRightChild(i) {
        return (i * 2) + 2
    }
    getParent(i) {
        return Math.floor((i - 1) / 2)
    }
    heapifyUp(i) {
        if (i <= 0) return
        const parent = this.getParent(i)
        console.log(parent)
        console.log(this.heap[parent])
        if (this.heap[parent] > this.heap[i]) {
            const temp = this.heap[parent]
            this.heap[parent] = this.heap[i]
            this.heap[i] = temp
            this.heapifyUp(parent)
        }
    }

    insert(value) {
        this.heap.push(value)
        console.log(this.heap.length)
        this.heapifyUp(this.heap.length - 1)
    }

    print() {
        console.log(this.heap)
    }
}

const h = new MinHeap()
h.insert(1)
h.insert(2)
h.insert(9)
h.insert(3)
h.insert(4)
h.insert(0)
h.insert(5)
h.insert(3.5)
h.print()
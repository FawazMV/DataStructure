class CircularQueue {
    constructor(size) {
        this.items = new Array(size);
        this.capacity = size;
        this.currentLength = 0;
        this.rear = -1
        this.front = 0
    }
    enqueue(item) {
        if (this.isFull()) return console.log('queue is full')
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = item
        this.currentLength++
    }
    dequeue() {
        if (this.isEmpty()) return console.log('queue is empty')
        const value = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength--
        return value
    }
    print() {
        let result = ''
        let i = this.front
        while (i !== this.rear) {
            result += this.items[i] + " "
            i = (i + 1) % this.capacity
        }
        result += this.items[i]
        console.log(result)
    }
    isEmpty() {
        return this.currentLength === 0
    }
    isFull() {
        return this.capacity === this.currentLength
    }
}

const q = new CircularQueue(5)

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(1)
q.dequeue()
q.enqueue(5)

q.print()
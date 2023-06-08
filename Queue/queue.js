class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }
    enqueue(item){
        this.items[this.rear++] = item
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front++]
        return item
    }
    print(){
        console.log(this.items)
    }

}


const q = new Queue
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q.dequeue())
q.print()
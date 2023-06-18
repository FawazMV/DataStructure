class Stack {
    constructor() {
        this.stack = []
    }
    push(value) {
        this.stack.push(value)
    }
    pop() {
        return this.stack.pop()
    }
    reverse() {
        this.reversePrint(0)
    }
    reversePrint(i) {
        if (i<this.stack.length) {    
            console.log(this.stack[i])
            this.reversePrint(++i)
        }
    }
    print() {
        console.log(this.stack)
    }
}
const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.print()
st.reverse()
st.print()

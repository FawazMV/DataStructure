class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) this.root = node
        else this.insertNode(this.root, node)
    }
    insertNode(parent, child) {
        if (child.value < parent.value) {
            if (parent.left === null) parent.left = child
            else this.insertNode(parent.left, child)
        }
        else {
            if (parent.right === null) parent.right = child
            else this.insertNode(parent.right, child)
        }
    }
    search(value) {
        if (this.isEmpty()) return null
        else {
            return this.searchHelper(this.root, value)
        }
    }
    searchHelper(node, value) {
        if (node) {
            if (node.value === value) return true
            else if (value < node.value) {
                return this.searchHelper(node.left, value)
            } else {
                return this.searchHelper(node.right, value)
            }
        }
        else return false
    }
    min(node) {
        if (!node.left) return node.value
        else return min(node.left)
    }
    delete(value) {
        this.deleteHelper(this.root, value)
    }
    deleteHelper(node, value) {
        if (node === null) return node

        if (value < node.value) {
            node.left = this.deleteHelper(node.left, value)
        } else if (value > node.value) {
            node.right = this.deleteHelper(node.right, value)
        } else {
            if (!node.left && !node.right) return null
            if (!node.left) return node.right
            if (!node.right) return node.left
            node.value = this.min(node.right)
            node.right = this.deleteHelper(node.right, node.value)
        }
        return node
    }
    isEmpty() {
        return this.root == null
    }
    preOrder() {
        const preOrder = (node) => {
            if (node) {
                console.log(node.value)
                preOrder(node.left)
                preOrder(node.right)
            }
        }
        return preOrder(this.root)
    }
    inOrder() {
        const inOrder = (node) => {
            if (node) {
                inOrder(node.left)
                console.log(node.value)
                inOrder(node.right)
            }
        }
        return inOrder(this.root)
    }
    isBst() {
        let prev = -Infinity
        let isBST = true
        const inOrder = (node) => {
            if (node && isBST) {
                inOrder(node.left)
                if (node.value < prev) {
                    isBST = false
                }
                prev = node.value
                inOrder(node.right)
            }
        }
        inOrder(this.root)
        return isBST
    }
    postOrder() {
        const postOrder = (node) => {
            if (node) {
                postOrder(node.left)
                postOrder(node.right)
                console.log(node.value)
            }
        }
        return postOrder(this.root)
    }
    bfs() {
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }
}

const bst = new BST
console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.insert(5)
// console.log(bst.isEmpty())
// console.log(bst.search(20))
// console.log(bst.search(12))
bst.inOrder()
bst.delete(5)
bst.insert(9)
console.log('----first------')
bst.inOrder()

console.log(bst.isBst())
// console.log(bst.root)
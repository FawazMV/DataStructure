//insert a element O(logn) - height of the tree
class Heap {
    constructor() {
        this.heap = []
    }
    insert(element) {
        this.heap.push(element)
        let index = this.heap.length - 1
        let parent = Math.floor((index - 1) / 2)
        while (this.heap[parent] < element && parent >= 0) {
            let temp = this.heap[parent]
            this.heap[parent] = element
            this.heap[index] = temp
            index = parent
            parent = Math.floor((parent - 1) / 2)
        }
    }

    heapify(arr, length, parentIndex) {
        let largest = parentIndex
        let left = parentIndex * 2 + 1
        let right = left + 1

        if (left < length && this.heap[largest] < this.heap[left]) {
            largest = left
        }
        if (right < length && this.heap[largest] < this.heap[right]) {
            largest = right
        }

        if (largest !== parentIndex) {
            let temp = this.heap[parentIndex]
            this.heap[parentIndex] = this.heap[largest]
            this.heap[largest] = temp
            this.heapify(arr, length, largest)
        }
    }
    heapSort() {
        let length = this.heap.length
        let lastParentNode = Math.floor(length / 2 - 1)
        let lastChild = length - 1

        while (lastParentNode >= 0) {
            this.heapify(this.heap, length, lastParentNode)
            lastParentNode--
        }

        while (lastChild >= 0) {
            let temp = this.heap[0]
            this.heap[0] = this.heap[lastChild]
            this.heap[lastChild] = temp
            this.heapify(this.heap, lastChild, 0)
            lastChild--
        }
        return this.heap
    }
    deleteMax() {
        if (this.heap.length === 0) {
            return null;
        }

        const max = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapify(this.heap, this.heap.length, 0);

        return max;
    }

    print() {
        console.log(this.heap)
    }
}

const heap = new Heap

heap.insert(19)
heap.insert(1)
heap.insert(25)
heap.insert(9)
heap.insert(10)
heap.insert(30)
heap.deleteMax()
heap.print()

console.log(heap.heapSort())

// heapify-up operation compares the newly inserted element with its parent node and swaps them if necessary, repeating the process until the element is in its correct position or becomes the root of the heap.
//In a max heap, the heapify-down operation compares the modified element with its child nodes and swaps it with the larger child if necessary, repeating the process until the element is in its correct position or becomes a leaf node.

// Insertion in a Heap: The time complexity of inserting an element into a heap is O(log n),
// Deletion(Extracting Max / Min) in a Heap: The time complexity of deleting the maximum(or minimum) element from a heap is O(log n),

// Heapify(Building a Heap): The time complexity of building a heap(heapify) from an unsorted array is O(n), 
// Heap Sort: Heap sort is an in-place sorting algorithm that utilizes the heap data structure. The time complexity of heap sort is O(n log n),
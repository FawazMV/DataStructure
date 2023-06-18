const a1 = [1, 2, 3, 7, -3, 3, 2, 6]


const mergeSort = (array) => {
    if (array.length < 2) return array
    const mid = Math.floor(array.length / 2)
    const leftArray = array.slice(0, mid)
    const rightArray = array.slice(mid)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
    const result = []
    let leftIndex = 0;
    let rightIndex = 0
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++
        }
    }
    // return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));

    return [...result, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]
}

console.log(mergeSort(a1))

// Merge sort:
// Merge sort is a divide - and - conquer sorting algorithm that works by
// dividing the input array into smaller sub - arrays, sorting each 
// sub - array recursively, and then merging the sorted sub - arrays into 
// a single sorted array.The algorithm uses a temporary array to merge the 
// sub - arrays, and it has a time complexity of O(n log n).

// Applications:
// Merge sort is a widely used sorting algorithm due to its stable performance, 
// even on large data sets.It is used in practice for sorting large data sets, 
// external sorting, and as a sub - routine in more complex algorithms.

// Best-case time complexity: O(n log n) - when the input array is already sorted or nearly sorted.
// Worst-case time complexity: O(n log n) - regardless of the input distribution.
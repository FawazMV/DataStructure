const quickSort3 = (array) => {
    if (array.length <= 1) {
        return array; // base case: an array with 0 or 1 elements is already sorted
    } else {
        const pivot = array[0]; // choose the first element as the pivot
        const left = [];
        const right = [];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]); // elements less than the pivot go to the left
            } else {
                right.push(array[i]); // elements greater than or equal to the pivot go to the right
            }
        }
        // recursively sort the left and right subarrays, then concatenate them with the pivot in the middle
        return [...quickSort3(left), pivot, ...quickSort3(right)];
    }
};

// example usage:
const arrays = [5, 4, 3, 2, 1, 4, 32, 5, 6];
console.log(quickSort3(arrays)); // prints [1, 2, 3, 4, 4, 5, 5, 6, 32]


// Quick sort:
// Quick sort is a divide - and - conquer sorting algorithm that works by selecting 
// a pivot element from the array, partitioning the array into two sub - arrays based 
// on the pivot element, and then recursively sorting the sub - arrays.The algorithm 
// selects a pivot element, usually the last element in the array, and then partitions 
// the array into two sub - arrays: one sub - array contains all elements less than the 
// pivot, and the other sub - array contains all elements greater than the pivot.Quick 
// sort has a time complexity of O(n log n) on average but can degrade to O(n ^ 2) in 
// the worst case.

// Applications:
// Quick sort is a widely used sorting algorithm due to its fast average -case performance
//  and low memory requirements.It is used in practice for sorting large data sets, as a 
//  sub - routine in more complex algorithms, and as a standard library function in many 
//  programming languages.


// Best-case time complexity: O(n log n) - when the pivot element always divides the input 
// array into two nearly equal parts.
// Worst-case time complexity: O(n^2) - when the pivot element is always selected as the 
// minimum or maximum element in the input array, leading to unbalanced partitions.
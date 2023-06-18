const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--
        }
        array[j + 1] = temp
    }
    return array
}
const array = [8, 3, 4, 5, 6, 7, 0, 1]


console.log(insertionSort(array))
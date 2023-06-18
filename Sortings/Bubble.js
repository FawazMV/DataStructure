const bubble = (array) => {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)

    return array
}

const array = [8, 3, 4, 5, 6, 7, 0, 1]
console.log(bubble(array))
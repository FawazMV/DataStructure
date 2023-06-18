const selection = (array) => {
    for (let j = 0; j < array.length; j++) {
        for (let i = j + 1; i < array.length; i++) {
            if (array[i] < array[j]) {
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array
}

const array = [8, 3, 4, 5, 6, 7, 0, 1]
console.log(selection(array))
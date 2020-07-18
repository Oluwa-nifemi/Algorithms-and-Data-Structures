const mergeSortedArrays = (arr1, arr2) => {
    let emptyArray = [];

    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        if (arr1[i] < arr2[i]) {
            emptyArray.push(arr1[i]);
            emptyArray.push(arr2[i]);
        } else {
            emptyArray.push(arr2[i]);
            emptyArray.push(arr1[i]);
        }
    }

    if (arr1.length > arr2.length) {
        emptyArray = emptyArray.concat(
            arr1.slice(
                Math.max(arr2.length - 1, 0)
            )
        );
    } else if(arr1.length < arr2.length){
        emptyArray = emptyArray.concat(
            arr2.slice(
                Math.max(arr1.length - 1, 0)
            )
        );
    }

    return emptyArray;
};

const mergeSort = (array) => {
    if(array.length > 1){
        const mergeFirstHalf = mergeSort(
            array.slice(0, Math.floor(array.length / 2))
        )

        const mergeSecondHalf = mergeSort(
            array.slice(Math.floor(array.length / 2))
        )

        return mergeSortedArrays(mergeFirstHalf, mergeSecondHalf)
    }else{
        return array
    }
}

console.log(mergeSort([1, 3, 2, 5]))
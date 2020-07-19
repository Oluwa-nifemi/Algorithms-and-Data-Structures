const swap = (arr, first, second) => {
    const temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}

const pivot = (arr, startIndex = 0, endIndex = arr.length - 1) => {
    const pivotVal = arr[startIndex];
    let swapIdx = startIndex;

    for (let idx = startIndex + 1; idx <= endIndex; idx++) {
        if (pivotVal > arr[idx]) {
            swapIdx++;
            swap(arr, swapIdx, idx)
        }
    }

    swap(arr, swapIdx, startIndex)

    return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        const pivotIndex = pivot(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)

    }   
    return arr
}



console.log(quickSort([6, 5, 2, 1, 8, 4, 7, 3]));
// console.log(quickSort([6, 5, 2, 1, 8, 4, 7, 3]));
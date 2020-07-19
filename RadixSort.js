const getDigit = (num, position) => {
    const divided = Math.abs(num) / Math.pow(10, position)

    return Math.floor(divided) % 10
}

const digitCount = num => {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = arr => {
    let maxDigits = 0;

    arr.forEach(num => {
        maxDigits = Math.max(maxDigits, digitCount(num))
    })

    return maxDigits
}

const radixSort = (arr) => {
    const maxDigits = mostDigits(arr)

    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({length: 10}, () => [])

        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j])
        }

        arr = buckets.flat(1)
    }

    return arr
}

const randomArray = Array.from({length: 10000}, _ => Math.floor(Math.random() * 1000))

const start = new Date().getTime()

console.log(radixSort(randomArray))

const elapsed = new Date().getTime() - start
console.log('Seconds:', elapsed)

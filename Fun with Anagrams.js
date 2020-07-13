let TEST_ARRAY = ['code', 'doce', 'ecod', 'framer', 'frame']

//Didn't use this cause the time complexity isn't the best
const isAnagramSort = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('')

const isAnagramFrequency = (str1, str2) => {
    const freq = {}

    str1.split('').forEach(letter => {
        //If it's not in the object ++undefined will return NaN which is falsy to it'll default to 1
        freq[letter] = ++freq[letter] || 1
    })

    //Loop through string
    for (let i = 0; i < str2.length; i++) {
        if(freq[str2[i]]){
            //If found reduce. If it's reduced to 0 it'll still go to the else cause 0 is falsy (Js is cool ;-))
            freq[str2[i]]--
        }else{
            //If not found or 0 return false
            return false
        }
    }

    /*
        Check if any of the values in the frequency counter are greater than 0
        because if there's any then it's not present or enough in the second string and therefore it's not a valid anagram pair
        And just return that value cause I'm too lazy to type if else abeg
     */
    return !Object.values(freq).some(val => val > 0)
}

//This is the tricky but actual pretty simple part
const transformArray = (array) => {
    //We have two pointers to point to the values we're comparing
    let i = 0, j = 1;

    while(j < array.length){
        if(isAnagramFrequency(array[i], array[j])){
            //If it's an anagram just yeet it from the array
            array.splice(j, 1)
        }else{
            //If not move our pointers forward one step each
            i++
            j++
        }
    }

    return array.sort() //Taking advantage of js's niceness cause why not?
}

console.log(transformArray(TEST_ARRAY))
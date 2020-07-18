//Fibonacci
const fibonnaci = (numSteps, currArray = [1, 1]) => {
    if (currArray.length === numSteps) {
        return currArray.pop();
    }

    const len = currArray.length;

    return fibonnaci(
        numSteps,
        [
            ...currArray,
            currArray[len - 1] + currArray[len - 2]
        ]
    );
};

//Better fibonnaci
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

//Reverse string
const reverse = (string, currLetter = string.length - 1, currStr = '') => {
    if (currLetter < 0) {
        return currStr;
    }

    return reverse(
        string,
        currLetter - 1,
        currStr + string[currLetter]
    );
};

//Flatten arrays that contain arrays
function flatten(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}
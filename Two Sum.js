// https://leetcode.com/problems/two-sum/

var twoSumOld = function (nums, target) {
    //Create an object that contains the numbers matched to an array of their indexes
    const indexes = nums.reduce((currIndexes, currNum, currIndex) => {
        if (currIndexes[currNum]) {
            currIndexes[currNum].push(currIndex);
        } else {
            currIndexes[currNum] = [currIndex];
        }

        return currIndexes;
    }, {});

    //Sort the array
    nums = nums.sort((a, b) => a - b);


    //Create a pointer to the end and beginnning
    let i = 0, j = (nums.length - 1);

    while (i < j) {
        //Check if our current sum is equal to the target
        if ((nums[i] + nums[j]) === target) {
            //If it is check whether our sums are equal
            if (nums[i] === nums[j]) {
                //If they are return the first two values as the correct array
                return indexes[nums[i]].slice(0, 2);
            } else {
                //If not return the first value in each index array
                return [indexes[nums[i]][0], indexes[nums[j]][0]];
            }
        } else {
            //If we've not found our target. Check if target - the sum is > 0
            if (target - (nums[i] + nums[j]) > 0) {
                // if yes then we need a larger sum of numbers so move i forward
                i++;
            } else {
                //If no we need a smaller sum so move j backwards
                j--;
            }
        }
    }

    return null;
};

var twoSum = function (nums, target) {
    //Create an object that contains the numbers matched to an array of their indexes
    const indexes = nums.reduce((currIndexes, currNum, currIndex) => {
        if (currIndexes[currNum]) {
            currIndexes[currNum].push(currIndex);
        } else {
            currIndexes[currNum] = [currIndex];
        }

        return currIndexes;
    }, {});

    for (let i = 0; i < nums.length; i++) {
        //Find the value of subtracting the target from the current number
        const complement = target - nums[i];

        //Check if it exists in the object
        if(indexes[complement]){
            //If it does check if the complement is equal to the current number like 3+3 = 6
            if(complement === nums[i]){
                //If yes check whether the indexes array is bigger than one item if yes return the sliced array
                if(indexes[complement].length > 1){
                    return indexes[complement].slice(0, 2)
                }
            }else{
                //Else return current index and index of the complement
                return [
                    i,
                    indexes[complement][0]
                ]
            }
        }
    }

    return null
};

console.log(twoSum([2, 7, 15, 11], 9)) // => [ 0, 1 ]
console.log(twoSum([3,2,4], 6)) // => [ 1, 2 ]
console.log(twoSum([3, 3], 6)); // => [ 0, 1 ]
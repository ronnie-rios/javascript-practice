function largestOfFour(arr) {
//Create a variable to store the results as an array.
const results =[]
//Create an outer loop to iterate through the outer array.
for (let i = 0; i < arr.length; i++) {
//Create a second variable to hold the largest number and initialise it with the first number.
//This must be outside an inner loop so it won’t be reassigned until we find a larger number.  
    let largestNum = arr[i][0];
//Create said inner loop to work with the sub-arrays.
    for (let j=1; j < arr[i].length;j++){
//Check if the element of the sub array is larger than the currently stored largest number.
// If so, then update the number in the variable.
    if (arr[i][j] > largestNum) {
        largestNum = arr[i][j]
    }
    }
    //After the inner loop, save the largest number in the corresponding position inside of the results array.
    results[i] = largestNum
    }
    return results
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour2(arr) {
    //we map all items within the main array to a new array map()
    //return this array as the final result within each inner array
    //we reduce its contents down to a single value using Array.prototype.reduce()
    return arr.map(function(group) {
        //callback function passed to the reduce method takes the previous value and the current value and compares the two values
        return group.reduce(function(prev, current) {
            //if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array
            // or returns it to the map method callback if it’s the last item
            return current > prev ? current : prev;
        });
});
}
largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

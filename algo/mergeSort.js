const arr1 = [4, 6, 10, 18]

const arr2 = [2, 12, 20]

function mergeSortedArr(arr1, arr2) {
    //hold our merged arr
    const newArr = [];
    //first item in ar1
    let arr1item = arr1[0];
    //first item in arr2
    let arr2item = arr2[0];
    //counter for arrs respectively
    let i = 1;
    let j = 2
    //checking input
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    while(arr1item || arr2item) {
        //check for one if it is not undefined
        if (!arr2item || arr1item < arr2item) {
            //add the one to the new arr
            newArr.push(arr1item)
            //set the item to the arr value at the index
            arr1item = arr1[i]
            i++;
        } else {
            newArr.push(arr2item);
            arr2item = arr2[j]
            j++;
        }
    }

    return newArr;
}
console.log(mergeSortedArr(arr1, arr2));

//optimize by refactoring line 25 in to its own helper function
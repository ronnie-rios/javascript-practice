function binarySeach(target, start, end) {
    //end condtion
    if(start > end) {
        return 'not found'
    }
    const middle =Math.floor((start +end) /2);
    if(arr[middle]===target) {
        return `found at ${middle}`;
    }
    if(arr[middle] > target) {
        return binarySeach(target, start, middle - 1);
    }
    if (arr[middle] < target) {
        return binarySeach(target, middle +1, end)
    }
}
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


function bSearch(target, start, end) {
    let start;
    let end = nums.length - 1;

    while(start<=end) {
        let middle = Math.floor((start + end) / 2);

        if(target ===nums[middle]) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle -1 ;
        }
    }

    return -1;
}
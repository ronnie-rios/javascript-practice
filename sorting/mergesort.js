const nums = [4,1,3,2,6,5];

function partition(arr) {
    let length = arr.length;
    //basecase
    if(length <= 1) { return; };
    
    //get middle
    let middle = length /2

    let leftArr = middle
    let rightArr = length - middle

    let i =0;
    let j =0;

    for(let i; i < arr.length; i++) {
        if(i<middle) {
            leftArr[i]
        }
    }
}
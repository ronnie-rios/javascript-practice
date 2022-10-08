//when given an arr and chunk suz, divide the arr into many subarrays
//where each subarray is of length sue

const arr =[1,2,3,4,5,6]
const arr2 =[1,2,3,4]

function chunk(array, size){
    //split the arr
    let newArr = array.slice(0, size)
    let newArr2 = array.slice(size, size + array.length)
    console.log(newArr)
    console.log(newArr2);
}

chunk(arr,2)

function chunk2(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
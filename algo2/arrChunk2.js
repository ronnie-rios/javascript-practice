//given an arr, and chunk size, divide the arr into many subarrays
//where each sub array is length of chink size
//chunk([1,2,3,4],2) => [[1,2],[3,4]]
//chunk([1,2,3,4,5],2) => [[1,2],[3,4],[5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked
}

console.log(chunk([1,2,3,4,5,6,7],3))
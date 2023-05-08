const matrix1 = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]
//expecte = 2
// left to right diagnal 1 + 5 + 9 = 15
//right to left 3 + 5 +9 = 17
//diff is 2

function matrix(arr) {
    let leftSum = 0;
    let rightSum= 0;

    for(let i = 0; i < arr.length;i++) {
        const row = arr[i]
        leftSum += row[i]
        rightSum += row[row.length -i- 1]
    }
    return Math.abs(leftSum - rightSum)
}

console.log(matrix(matrix1));
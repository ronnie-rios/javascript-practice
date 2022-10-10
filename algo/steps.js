function steps(n) {
    
    for(let row = 0; row < n; row++) {
        let stair = '';
        for(let column=0; column < n; column++) {
            if (column <= row) {
                stair+= '#';
            } else {
                stair+= ' '
            }
        }
        console.log(stair)
    }
}

//from 0 to n
//create an empty str 'stair
//from 0 to n
//if current column is equal to or less
//add a #
//else a space
//log the stair
steps(6)

function recursiveSteps(n, row = 0, stair = '') {
    //make sure to pass and stair in row too
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair);
        return recursiveSteps(n, row + 1);
    }
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    recursiveSteps(n, row, stair)
}
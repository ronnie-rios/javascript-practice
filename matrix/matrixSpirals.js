//write a func that accpets an integer N and returns a N x N spiral matrix
//matrix(2) =>
//[[1, 2], 
///[4,3]
//the nums increase in a spiral into the center clockwise

//create empty arr called results
//create a counter at 1
//as long as start column <= end column & start row <= end row
    //loop from start to end
        //at results[start-row][i] assign counter
        ///increment counter
    //increment start row
    //loop from start row to end row
        //at results[i][end-column] assign counter
        //increment counter
    //decrement end column
    //repeat - each loop will construct a different part of the loop

    function matrix(n) {
        const results = [];
        
        for (let i = 0; i < n; i++) {
            //can assing values to indices of an array that have not yet been assign
            results.push([])   
        }
        //end will always be n - 1
        let counter = 1;
        let startColumn = 0;
        let endColumn = n - 1;
        let startRow = 0;
        let endRow = n - 1;

        while(startColumn <= endColumn && startRow <= endRow) {
            //first for loop will assemble top row
            for(let i = startColumn; i <= endColumn; i++) {
                //set our results, from 0 to n, and at the particlar index
                //assign the counter
                results[startRow][i] = counter;
                counter ++;
            }
            startRow++;
            //going to iterate from start row to 1 to n, and we flip the index because we are using the index first, then the column
            //right column
            for(let i = startRow; i <= endRow; i++) {
                results[i][endColumn] = counter;
                counter ++;
            }
            endColumn--;
            //bottom row
            for(let i = endColumn; i >= startColumn; i--) {
                results[endRow][i] = counter;
                counter++;
            }
            endRow--;
            //start column
            for(let i = endRow; i >= startRow; i--) {
                results[i][startColumn] = counter;
                counter++;
            }
            startColumn++;
        }

    }

console.log(matrix(3))

    const arr =[];
    arr[3] = 'momo'
    //will yield [null, null, null, 'momo']
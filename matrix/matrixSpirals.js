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
    //decrement end row
    //repeat

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
            
        }

    }


    const arr =[];
    arr[3] = 'momo'
    //will yield [null, null, null, 'momo']
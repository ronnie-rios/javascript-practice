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
const intArray = [1, 2, 3, 4, -2, 0, -5]

//return the lowest pairs from the array

//intial two variables to 0
let a, b = 0
//add the two indexes from the arr
let compareTotal = intArray[0] + intArray[1]

function lowestPair() {
    intArray.forEach(num1 => {
        intArray.forEach(num2 => {
        //conditional to check that same nums in arr wont be added
            if (intArray.indexOf(num1) !== (intArray.indexOf(num2))) {
                let total = num1 + num2
                let absoluteTotal = Math.abs(total)
                if (Math.abs(compareTotal) > absoluteTotal) {
                    compareTotal = num1 + num2
                    a = num1
                    b = num2
                }
            }
            return [compareTotal, num1, num2]
        })
    })
    console.log([a,b])
}

lowestPair()
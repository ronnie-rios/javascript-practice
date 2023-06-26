//given a str of letters and nums
//combine the letter count occurances
//return the str sorted alphabetied


const str = 'b20a10c30a20c10';
const expected = 'a30b20c40';


function rehash(str) {
    //loop through the str
    //make a map to hold the letter and number values
    //check if it's a letter or num
        //if letter, set as key
        //if num, set as value
    const map = {};
    let newStr = ''
    for(let i = 0; i < str.length; i++ ) {
        let char = str[i]
        if(!isNaN(char)) {
            parseInt(char)
            newStr += char;
        }

        
    }
    console.log(newStr);
}

rehash(str)
// creating arrays
//normal way 
const nums = [1, 2, 3]

//arr constructor
const arrConstructor = new Array(1, 2, 3);
//if single num passed in, creates an array with a fixed length of empty values

const arrOfVersion = Arr.of(1, 2)

//takes in an iterable and turns it into an arr
//hi turns into ['h', 'i']
const arrFrom = Array.from('hi')


//add data to arrs
const stuff = ['cup', 'desk'];
stuff.push('mouse') //adds to end => returns length of arr
stuff.unshift('coding') // adds to start => returns length of arr
stuff.pop() //removes the last ele
stuff.shift(); //removes the first

stuff[1] = 'momo land'
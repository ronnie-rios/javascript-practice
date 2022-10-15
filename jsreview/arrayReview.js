// creating arrays
//normal way 
const nums = [1, 2, 3]

//arr constructor
const arrConstructor = new Array(1, 2, 3);
//if single num passed in, creates an array with a fixed length of empty values

const arrOfVersion = Array.of(1, 2)

//takes in an iterable and turns it into an arr
//hi turns into ['h', 'i']
const arrFrom = Array.from('hi')


//add data to arrs
const stuff = ['cup', 'desk'];
stuff.push('mouse') //adds to end => returns length of arr
stuff.unshift('coding') // adds to start => returns length of arr
stuff.pop() //removes the last ele
stuff.shift(); //removes the first

//change an index value
stuff[1] = 'momo land'

//splice | first param is start index | second is # to delete | third is items inserted at first param 
//splice is good for inserting and deleting
stuff.splice(0, 0, 'bizkit')
console.log(stuff)
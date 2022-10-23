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

const chickens = ['momo', 'biscuit', 'jaxon', 'momo2', 'bizkit2']
//slice => returns a copy of the arr
//slice takes in the start and end as parameters, end is not inclusive
const newChickens = chickens.slice(2, 4)
console.log(newChickens)

//indexOf => returns FIRST instance of the element it finds, returns -1 if nothing found
//lastIndexOf() starts from the right
//works with primitives not reference
console.log(chickens.indexOf('biscuit'))

//find() => takes an argument, but another function

const chickenData = [ { name: 'momo' }, { name: 'bizkit' }, { name: ' jaxon' }]

const momo = chickenData.find((chicken) => chicken.name=== 'momo')
console.log(momo);


//forEach method
const prices = [10, 15, 29,30]
const tax = 2
const taxAdjust = [];

prices.forEach((price) => {
    taxAdjust.push(price * tax)
});
console.log(taxAdjust, 'after tax')

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
console.log(taxAdjust, 'after tax');

//map is better cause you dont have to manage the new arr

const data = [ 2, 4, 6, 8]
const triple = 3

const newData = data.map((ele) => {
   return ele * triple
});
console.log(newData)

//REDUCE (dont use last two too much)
//takes the prevValue, curValue, curIndex, array
//can do a lot reduce an arr to a simpler value
const newSum = data.reduce((prevValue, curValue) => {
    //return the current value
    return prevValue, curValue
}, 0)

const numbers = [2, 8, 10, 15, 15, 25, 30]

const greaterThanFive = numbers.filter(num => num > 5)
console.log(greaterThanFive)

const numObj = numbers.map((num) => {
    return obj = {
        container: num
    }
});
console.log(numObj)

const reducedNums = numbers.reduce((prev, curr) => {
    return prev * curr
});
console.log(reducedNums);

function findLargest(x,y,z,a) {
    const container = new Array(x,y,z,a);
    let curMax = container[0]
    let curMin = container[0]
   for(const num of container) {
    if(num > curMax) {
        curMax = num
    }
   }
   for(const num of container) {
    if (num < curMin) {
        curMin = num
    }
   }
    return [curMax, curMin]
    
};
console.log(findLargest(2,4,6, 8))

const noDupes = new Set(numbers);
console.log(noDupes)

const [ newAnimal ] = chickens
console.log(newAnimal);
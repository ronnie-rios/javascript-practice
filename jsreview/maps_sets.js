//SETs are data of any kind of length
//iterable with some SET methods
//order is not guaranteed, duplicates are NOT allowed, no index based access

//MAPs
//store key-value data of any kind and length
//any data type for keys can be used
//iterable with some special methods
//order is guaranteed, duplicate kets are NOT allowed

//SETs - only way to create a set => automatically empty from start
const ids = new Set([1,2,3]);

//since sets are unique, don't need to get an index, rather check if it HAS a value
console.log(ids.has(2)) //will check if it has 2, returns true or false

//sets values are unique

//entries() returns an iterable

//MAPS
const chicken1 = { name: 'momo' }
const chicken2 = { name: 'bizkit '}

const chickenData = new Map([[chicken1, [ { food: 'food', price: 15 } ]]])
//extra info to attach to an obj, and won't mutate original object
//can access properties with get()
//can add properties with set()
//access the map with entries, and can access the array with two elements, first ele is key and second is value
//maps have any values and types as keys while objects can only use strings and numbers

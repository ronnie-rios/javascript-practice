# Higher Order Functions

## What are they?
These are functions that **operate** on other functions either  by receiving them as arguments or by returning them. t is a function that accepts a function as a parameter or returns a function as the output.

### Map()
`.map()` method **creates a new array** populated with the results of calling a provided function on every element in the calling array. `.map()` forms a new array by calling the function passed into it as an argument, **on each and every element of the array. it will `map` each of the return values from the callback and create a new array**

### Examples
```js
// Arrow function
map((element) => { /* ... */ })
map((element, index) => { /* ... */ })
map((element, index, array) => { /* ... */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* ... */ })
map(function(element, index) { /* ... */ })
map(function(element, index, array){ /* ... */ })
map(function(element, index, array) { /* ... */ }, thisArg)
```
### Parameters
* `callbackFn` function that is called for every element of the `arr`. each time it executes, the returned value is added to the `newArray`
* `element` current element being processed in the array
* `index` index of current element being processed in the array
* `array` the array that is being mapped
* `thisArg` value to use as `this` when using a `callbackFn`

### Return
* `.map()` returns a **new array** with each element being the result of the **callback function**

### Example 1
create a new array in which you double each integer in the original array.
```js
const numArr = [10, 15, 45, 100]
const doubledNumArr = numArr.map(num => num * 2)
console.log(doubledNumArr)
```
`numArr` is the original array.  
Let's look at the `.map()`. We are passing in an element and an arrow function. The elment `num` is each number from the original array and the arrow function is taking **each** `num` and multiplying it by 2 and stores it in a new array called `doubledNumArr`.  

### Further Reading
* [Web MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
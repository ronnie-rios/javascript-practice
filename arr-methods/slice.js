//slice() copies or extracts a given number of elements to a new array, 
//leaving the array it is called upon untouched.
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather)

function forecast(arr) {
    // return only warm and sunny from the array passed into
    const sunny = arr.slice(2,4)
    return sunny;
  }
  
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
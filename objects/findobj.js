const objects = [
  { first: "momo", last: "momo1", age: 5 },
  { first: "momo", last: "momo2", age: 5 },
  { first: "bizkit", last: "bizkit2", age: 4 },
  { first: "ajax", last: "ajax2", age: 6 },
];
const query = { first: "momo", age: 5 };
//return the items from array that hve both keyvalues

function find(query, list) {
  //create a new arr
  const found = [];
  //loop thru the arr
  for(const item of list) {
    let matching = true
    
    //check the query obj
    for(const key in query) {
      if(item.hasOwnProperty(key) === false || item[key] !== query[key]) {
        //end it here
         matching = false //we know its false
       // break;
      } else {
        found.push(item)

      }
    }
    // //check if this valid
    // if(matching) {
    //   found.push(item)
    // }
  }
  return found
}

console.log(find(query, objects));
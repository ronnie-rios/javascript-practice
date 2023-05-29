const objects = [
  { first: "momo", last: "momo1", age: 5 },
  { first: "momo", last: "momo2", age: 5 },
  { first: "bizkit", last: "bizkit2", age: 4 },
  { first: "ajax", last: "ajax2", age: 6 },
];
const query = { first: "momo", age: 5 };
//return the items from array that hve both keyvalues

function find(query, list) {
  const found = []

  for(const item of list) {
    let isMatch = true
    for(const key in query) {
      const search = query[key]

      if(item.hasOwnProperty(key) === false || item[key] !==search) {
        isMatch = false;
        break
      }
    }
    if(isMatch) {
      found.push(item)
    }
  }
  return found;
}

const find2 = (query, list) => {
  return list.filter( item =>Object.keys(query).every(key => item[key]===query[key]))
}

console.log(find2(query, objects));

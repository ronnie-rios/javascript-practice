const objects = [
  { first: "momo", last: "momo1", age: 5 },
  { first: "momo", last: "momo2", age: 5 },
  { first: "bizkit", last: "bizkit2", age: 4 },
  { first: "ajax", last: "ajax2", age: 6 },
];
const query = { first: "momo", age: 5 };
//return the items from array that hve both keyvalues

function find(query, arr) {
  const result = [];
  for (const item of arr) {
    let found = true;
    for (const key in query) {
      if (
        item.hasOwnProperty(key) === false ||
        item[item] !== query[item]
      ) {
        found = false;
        break;
      }
    }
    if (found) {
      result.push(item);
    }
  }
  return result
}

console.log(find(query, objects));

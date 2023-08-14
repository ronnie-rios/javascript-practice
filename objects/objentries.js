const obj = {
  name: "momo",
  type: "cat",
};

//expected = [ ["name","momo"],["type","cat"] ]

function extract(obj) {
  const result = [];
  for (const key in obj) {
    if(obj.hasOwn(obj, key))
    result.push([key, obj[key]])
  }
  return result
}

console.log(extract(obj));


const tbl = 'users';
const data = { firstName: 'momo', lastName: 'bizkit' }
//expected = `insert into users (firstName, lastName) values ('momo','bizkit');

function query(table, data) {
    const keys = Object.keys(data).join(',');
    const values = Object.values(data).join(',');
    return `insert into ${table} (${keys}) values (${values})`
}

console.log(query(tbl, data));
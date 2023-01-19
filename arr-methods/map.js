
const items = [
    {
        name: 'momo',
        id: 1
    },
    {
        name: 'biscuit',
        id: 2
    },
    {
        name: 'ajax',
        id: 3
    },
]

items.map(item => console.log(item.name))


items.map(item => item.id = Math.random())
nums = [1, 2, 3, 4];

let a = [];
console.log(a);
const newArray = nums.forEach((num) => {
  a.push(num);
  
});
console.log(a);
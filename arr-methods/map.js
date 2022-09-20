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
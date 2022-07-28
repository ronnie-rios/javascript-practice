const cats = [
    { id: 1, name: "ajax" },
    { id: 2, name: "momo"},
    { id: 3, name: "bizkit" },
    { id: 4, name: "baguette" },
]

const printCat = () => {
    for (let i=0; i < cats.length; i++) {
        console.log(`${cats[i].name} name`)
    }
}

printCat()
const restaurant = {
    name: 'momo little italy',
    location: '123 momo street',
    categories: ['classic', 'veggie', 'pizzeria', 'gluten free'],
    starterMenu: ['bread', 'breadsticks', 'cheese', 'salad'],
    mainMenu: ['pizza', 'pasta', 'risotto']
}
//arr destructures, will log the first item in the categories arr
const [first, second] = restaurant.categories

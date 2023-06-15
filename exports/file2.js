//when importing the default export of a module using require
// can assign to a value

const polite = require('./functions')
const { thankYou, youreWelcome} = require('./functions')


polite.thankYou('person')

thankYou('friend')
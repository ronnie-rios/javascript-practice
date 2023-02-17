//sort odds arr only

function sortOdds(array) {
    const oddNums = array.filter(num => num%2 !== 0).sort((a,b) => a -b)
   const sort = array.map(num => num %2 !== 0 ? oddNums.shift() : num)
  return sort
}
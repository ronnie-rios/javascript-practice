let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); //returns -1 cause it doesnt exist
fruits.indexOf('oranges'); //returns 2
fruits.indexOf('pears'); //returns 1

function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true
    } else  {
      return false
    }
   
}
  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

function quickCheck2(arr, elem) {
  return arr.indexOf(elem) != -1   
}
console.log(quickCheck2(['squash', 'onions', 'shallots'], 'mushrooms'));

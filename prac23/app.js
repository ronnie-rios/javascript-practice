//const foo = 10 + '20';
//console.log(typeof foo); //should be string 1020

//console.log(0.1 + 0.2 == 0.3); //returns false
function add(a) {
    return function(b) {
      return a + b
    }
  }


  var foo = [];
  foo.push(1);
  foo.push(2);
  console.log(foo.length);
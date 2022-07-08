let chickens = {
    Momo: {
      age: 27,
      online: true
    },
    Ajax: {
      age: 32,
      online: true
    },
    Bizkit: {
      age: 48,
      online: true
    },
    Baguette: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(chickenObj) {
    if (
      chickenObj.hasOwnProperty('Momo') &&
      chickenObj.hasOwnProperty('Ajax') &&
      chickenObj.hasOwnProperty('Bizkit') &&
      chickenObj.hasOwnProperty('Baguette') 
    ) {
        return true
    } else {
      return false
    }
  }
  
  console.log(isEveryoneHere(chickens));
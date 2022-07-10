let users = {
    Momo: {
      age: 27,
      online: false
    },
    Ajax: {
      age: 32,
      online: true
    },
    Bizkit: {
      age: 48,
      online: false
    },
    Chicken: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    //loop through the parameter in users
    //return the key which is the name of obj
    for(obj in users){
      return Object.keys(users)
    }
  }
  
  console.log(getArrayOfUsers(users));
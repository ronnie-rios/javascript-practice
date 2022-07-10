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


  //add to a nested key
  let user = {
    name: 'Bizkalooo',
    age: 2,
    data: {
      username: 'bizkit-loo',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Bizkit',
        'Ajaz',
        'Momo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend)
    return userObj.data.friends
  }
  
  console.log(addFriend(user, 'Zingo'));
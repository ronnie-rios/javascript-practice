const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
  id: 3,
  name: "student3",
  isLateToday: true,
  lateCount: 0,
  redBeltStatus: true,
};

//loop through the arr
    //we are going to check the arr[i].id === i
    //we have arr[i] = obj, updatedValue = obj
    //loop thru the obj, updatedData obj, to see IF they exist, then we can override
    //return the new obj, with the updated key value pairs
//if no matches, we can return null
function find2(arr, id, updatedData) {
   const foundObj = arr.find(item => item.id === id) 

   
   for(key in updatedData) {
    if(key in foundObj) {
        const newValue = updatedData[key]
        foundObj[key] = newValue
    }
   }
   return foundObj ? foundObj : null
}

function find(arr, id, updatedData) {
  for (obj of arr) {
    
    if(obj.id === id) {
        for(key in updatedData) {
            if(key in obj) {
                const newValue = updatedData[key]
                obj[key] = newValue
            }
        }
        return obj
    }
  }
  return null; //if nothing found
}

// console.log(find(students, id1, updateData1));
console.log(find2(students, 22, updateData1));

//summary, hasOwnProperty() does not look in the prototype while `in` does look in the prototype

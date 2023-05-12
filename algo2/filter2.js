//arr as your state
const list = ['hi' ,'hello', 'greet']
//remove based on the index 
//in your dash, you have the index for each todo

function removeOne(userIndex) {
    const updatedArr = list.filter(function(item, index) {
        return index !== userIndex
    });
    return updatedArr;
}
function removeOneArrowFunc(userIndex) {
    const updatedArr = list.filter((item, index) => { return index !== userIndex });
    return updatedArr;
}
function removeOneArrowFuncNoReturn(userIndex) {
    const updatedArr = list.filter((item, index) =>  index !== userIndex );
    return updatedArr;
}



console.log(removeOne(1)); //from the btn click that index
console.log(removeOneArrowFunc(1));
console.log(removeOneArrowFuncNoReturn(1));
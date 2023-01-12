console.log([]+[]); //yields an empty string, why because empty arr trns into an empty str

function a(){
    return 'hello'
}

const sentence = a('hi');
console.log(sentence);
//returns hello because the func doesn't take any arguments

function y(){
    console.log(this.length);
}

var x = {
    length: 5,
    method: function(y) {
        arguments[0]()
    }
}

//x.method(y, 1) //calls the x obj and the method, which takes in y and 1, which executes
//y, and whatever y gives this.length but due to argments it points to length of the arguments

const z ='constructor'
console.log(z[z](01));
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let result;
const showBtn = document.getElementById('btn')

let num1 = parseFloat(input1)
let num2 = parseInt(input2)

showBtn.addEventListener('click', () => {
    let check = input1.value
    console.log(check);
    let result = num1 + num2
    console.log(result);
});

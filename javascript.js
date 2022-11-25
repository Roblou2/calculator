const display = document.querySelector('.display')
let a = 0; //first number before an operator is called


//Baic operating functions

function add (a, b) {
    return a + b
}

function sub (a, b) {
    return a - b
}

function div (a, b) {
    return a / b
}

function multi (a, b) {
return a*b
}

function operate (a, b) {

}
let numberOne = "" //the first number to be operarted on

let num = document.querySelectorAll('.num')

function makeNumStr (val) { 
if (a == 0) {
    a = val
    let numStr = a.toString()
    numberOne = numStr
    display.innerHTML = numStr
}
else if (val > 0) {                   //can still make decimal numbers as strings and then convert to number
    let next = val
    let nextStr = next.toString() 
numberOne += nextStr
    display.innerHTML = numberOne
}
console.log(numberOne)
}

function loop () {
    for (let i = 0; i < num.length; i++) {
        
        num[i].addEventListener('click', (e) => makeNumStr(e.target.innerHTML)) 
    }
}

window.onload = () => {
    loop ()
}


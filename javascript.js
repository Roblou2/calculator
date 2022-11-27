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

//get operator buttons
let sum = document.querySelector('.add')
let prod = document.querySelector('.multi')
let diff = document.querySelector('.sub')
let divide = document.querySelector('.divide')
let equals = document.querySelector('.equals')

//set up code for operator buttons on click 
let numArr = []

let operator = ""

sum.onclick = () => {

 if (numArr.length == 0) {
  let conv = parseInt(numberOne)
    numArr.push(conv)
    operator = "+"  
                                                      //the switch to use in operate function
    display.innerHTML = `${numArr[0]} ${operator}`
 }
 else if (numArr.length == 1) {
    let conv = parseInt(numberTwo)
    numArr.push(conv)
    numArr.reduce((accumulator, currentValue) => {
        operate(accumulator, currentValue)
            })
 }
}


//call this function when '=' pressed

equals.onclick = () => {
    let conv = parseInt(numberTwo)
    numArr.push(conv)
    numArr.reduce((accumulator, currentValue) => {
operate(accumulator, currentValue)

    })
  
}


function operate (accumulator, currentValue) {
if (operator == '+') {
display.innerHTML = add(accumulator, currentValue)
}
}


let numberOne = "" //the first number to be operarted on

let numberTwo = "" //second number



let num = document.querySelectorAll('.num')


function loop () {
   
    for (let i = 0; i < num.length; i++) {
 
        num[i].addEventListener('click', (e) => makeNumStr(e.target.innerHTML)) 
  
    }
}

window.onload = () => {
    loop ()
}

function makeNumStr (val) { 
    let  next = val
    let nextStr = next.toString()    //can still make decimal numbers as strings and then convert to number
    if (operator == "") {
numberOne += nextStr
    display.innerHTML = numberOne
    }
    else if (operator != "") {
numberTwo += nextStr
display.innerHTML = `${numArr[0]} ${operator} ${numberTwo}`
    }
}







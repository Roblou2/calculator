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

sum.onclick = addition
prod.onclick = multiply 
equals.onclick = eval 

   function addition () { //add OR here for setting up more operators

    if (operator == 'X') {
        let conv = parseInt(numberOne) 
    
        numArr.push(conv) 
        numArr.reduce((initial, currentValue) => {
            operate(initial, currentValue)
        
           })     
           operator = '+'
           display.innerHTML = `${numArr[0]}`
    }

operator = '+'

    if (numberOne != "" && numArr.length == 0) {
    let conv = parseInt(numberOne)
    numArr.push(conv)                           
    display.innerHTML = `${numArr[0]} ${operator}`
    numberOne = ""
 }
 else if (numArr[0] > 0 && numberOne != "") {  

    //fires when first number has been entered, pushed to array and the 'plus' operator has been pressed
    let conv = parseInt(numberOne) 

    numArr.push(conv) //now array has numberOne and numberTwo

    numArr.reduce((initial, currentValue) => {
        operate(initial, currentValue)
    
       })     
      
 }
 }

function multiply () {

if (operator == '+') { //add OR here for setting up more operators
    let conv = parseInt(numberOne) 

    numArr.push(conv) 
    numArr.reduce((initial, currentValue) => {
        operate(initial, currentValue)
    
       })     
       operator = 'X'
       display.innerHTML = `${numArr[0]}`
}

    operator = 'X'

    if (numberOne != "" && numArr.length == 0) {
    let conv = parseInt(numberOne)
    numArr.push(conv)                           
    display.innerHTML = `${numArr[0]} ${operator}`
    numberOne = ""
 }
 else if (numArr[0] > 0 && numberOne != "") {  

    //fires when first number has been entered, pushed to array and the 'plus' operator has been pressed
    let conv = parseInt(numberOne) 

    numArr.push(conv) 

    numArr.reduce((initial, currentValue) => {
        operate(initial, currentValue)
    
       })     
      
 }

}


//call this function when '=' pressed
function eval () {

    let conv = parseInt(numberOne) 
    numArr.push(conv) 
    numArr.reduce((initial, currentValue) => {
        operate(initial, currentValue)
       
      })
operator = ""

}


function operate (initial, currentValue) {
if (operator == '+') {
display.innerHTML = add(initial, currentValue)
numberOne = ""
        numArr[0] = parseInt(display.innerHTML)
        numArr.splice(1)

}

else if (operator == "X") {
    display.innerHTML = multi(initial, currentValue)
numberOne = ""
        numArr[0] = parseInt(display.innerHTML)
        numArr.splice(1)
     
}
}


let numberOne = "" //the first number to be operarted on


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
numberOne += nextStr
display.innerHTML = `${numArr[0]} ${operator} ${numberOne}`
    }
}







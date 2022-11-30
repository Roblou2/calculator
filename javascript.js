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
let reset = document.querySelector('.clear')

//set up code for operator buttons on click 
let numArr = []

let operator = ""

sum.addEventListener('click', calculation)
prod.addEventListener('click', calculation)
diff.addEventListener('click', calculation)
divide.addEventListener('click', calculation)
reset.addEventListener('click', clear)
equals.onclick = eval 

function calculation (e) {

    if (operator == 'X' || operator == '+' || operator == '-' || operator == '/') { //do sym in display first
        let conv = parseInt(number) 
    
        numArr.push(conv) 
        numArr.reduce((initial, currentValue) => {
            operate(initial, currentValue)
        
           })     
           operator = e.target.innerHTML
           display.innerHTML = `${numArr[0]}`
    }


    operator = e.target.innerHTML

    if (number != "" && numArr.length == 0) { //stores number in numArr
        let conv = parseInt(number)
        numArr.push(conv)                           
        display.innerHTML = `${numArr[0]} ${operator}`
        number = ""
     }
     else if (numArr[0] > 0 && number != "") {  //pushes second number to numArr and evaluates sum
    
    
        let conv = parseInt(number) 
    
        numArr.push(conv) 
    
        numArr.reduce((initial, currentValue) => {
            operate(initial, currentValue)
        
           })     
          
     }
}


//call this function when '=' pressed
function eval () {

    let conv = parseInt(number) 
    numArr.push(conv) 
    numArr.reduce((initial, currentValue) => {
        operate(initial, currentValue)
       
      })
operator = ""

}


function operate (initial, currentValue) {
if (operator == '+') {
display.innerHTML = add(initial, currentValue)
number = ""
        numArr[0] = parseInt(display.innerHTML)
        numArr.splice(1)

}

else if (operator == "X") {
    display.innerHTML = multi(initial, currentValue)
number = ""
        numArr[0] = parseInt(display.innerHTML)
        numArr.splice(1)
     
}

else if (operator == '-') {
    display.innerHTML = sub(initial, currentValue)
    number = ""
    numArr[0] = parseInt(display.innerHTML)
    numArr.splice(1)
}
else if (operator == '/')
display.innerHTML = div(initial, currentValue)
number = ""
numArr[0] = parseInt(display.innerHTML)
numArr.splice(1)
}

function clear () {
    numArr = []
    number = ""
    operator = ""
    display.innerHTML = 0
}


let number = "" //the first number to be operarted on


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
number += nextStr
    display.innerHTML = number
    }
    else if (operator != "") {
number += nextStr
display.innerHTML = `${numArr[0]} ${operator} ${number}`
    }
}







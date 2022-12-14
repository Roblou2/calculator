const display = document.querySelector('.display')



let a = 0; //first number before an operator is called


//Baic operating functions

function add (a, b) {
    return a + b
}

function sub (a, b) {
    return a - b
}

let compNo = "C0mput3r 54y5 N0"

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
let back = document.querySelector('.delete')
let decimal = document.querySelector('.point')

//set up code for operator buttons on click 
let numArr = []

let operator = ""

sum.addEventListener('click', calculation)
prod.addEventListener('click', calculation)
diff.addEventListener('click', calculation)
divide.addEventListener('click', calculation)
reset.addEventListener('click', clear)
back.addEventListener('click', backspace)

equals.onclick = eval 

decimal.addEventListener('click', (e) => makeNumStr(e.target.innerHTML)) 



function calculation (e) {


    if (operator != "" && numArr[0] > 0 && number != "") { //do sum in display first
        let conv = parseFloat(number) 
    
        numArr.push(conv) 
        numArr.reduce((initial, currentValue) => {
            operate(initial, currentValue)
        
           })     
           operator = e.target.innerHTML
           display.innerHTML = `${numArr[0]}`
    }


    operator = e.target.innerHTML //toggle between operators
    display.innerHTML = `${numArr[0]} ${operator}`

    if (number != "" && numArr.length == 0) { //for storing first number in numArr
   
        let conv = parseFloat(number)
        numArr.push(conv)                           
        display.innerHTML = `${numArr[0]} ${operator}`
        number = ""
    
     }

     else if (number == "" && operator != "" && numArr.length == 0) { //for when operators pressed but no numbers
      display.innerHTML = operator
    
     }
     else if (numArr[0] > 0 && number != "") {  //for pushing second number to numArr and evaluates sum
    
    
        let conv = parseFloat(number) 
    
        numArr.push(conv) 
    
        numArr.reduce((initial, currentValue) => {
            operate(initial, currentValue)
        
           })     
          
     }

}


//call this function when '=' pressed
function eval () {

    let conv = parseFloat(number) 
    numArr.push(conv) 
    numArr.reduce((initial, currentValue) => {
        operate(initial, currentValue)
       
      })
operator = ""
calculated = true
}

let calculated = false //used in makenumber function to allow you to write over displayed result after using equals operator


let inf = "N1C3 TRY"
function operate (initial, currentValue) {
 
if (operator == '+') {
let equals = (Math.round(((add(initial, currentValue)) + Number.EPSILON)*1000000)) / 1000000
if (equals > 9999999999999999999) {
    equals = equals.toExponential(3)
}
display.innerHTML = equals
number = ""
        numArr[0] = parseFloat(equals)
        numArr.splice(1)

}

else if (operator == "X") {
     let equals = (Math.round(((multi(initial, currentValue)) + Number.EPSILON)*1000000)) / 1000000
     if (equals > 9999999999999999999) {
        equals = equals.toExponential(3)
    }
     display.innerHTML = equals
number = ""
        numArr[0] = parseFloat(equals)
        numArr.splice(1)
     
}

else if (operator == '-') {
   let equals = (Math.round(((sub(initial, currentValue)) + Number.EPSILON)*1000000)) / 1000000
   if (equals > 9999999999999999999) {
    equals = equals.toExponential(3)
}
   display.innerHTML = equals
    number = ""
    numArr[0] = parseFloat(equals)
    numArr.splice(1)
}
else if (operator == '/') {
    if (initial > 0 && currentValue == 0) {
        initial = 0
        currentValue = 0
      return  display.innerHTML = compNo
    }
let equals = (Math.round(((div(initial, currentValue)) + Number.EPSILON)*1000000)) / 1000000

if (equals > 9999999999999999999) {
    equals = equals.toExponential(3)
}


display.innerHTML = equals
number = ""
numArr[0] = parseFloat(equals)
numArr.splice(1)
}
}

function clear () {
    numArr = []
    number = ""
    operator = ""
    display.innerHTML = 0
}

function backspace () {

   
    let isFirst = /\d/g
   let isOperator = /(\+|-|\*|\/|[X])/g
    let sumOn = /(\+|-|\*|\/|[X])(?= [0-9])/g


    if (sumOn.test(display.innerHTML) === true && number != "" && operator != "") { //is there an operation on display to evaluate?
        let editThree = number.split("")
        editThree.pop()
    transformThree = editThree.join("")
    number = transformThree
    display.innerHTML = `${numArr[0]} ${operator} ${number}`
    }


    else if (numArr.length == 1 && isOperator.test(display.innerHTML) === false) { 
//do nothing for displaying result
    }

    else if(isFirst.test(display.innerHTML) === true && operator == "") { //for no operator pressed and only first number on display
        if (number < 10 && number.includes('.') == false) {
          return clear()
        }
        let editTwo = number.split("")
editTwo.pop()
transformTwo = editTwo.join("")
number = transformTwo
display.innerHTML = number
}


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
    let nextStr = next.toString()

    if (number.includes('.') == true && nextStr == '.') { //ensures decimal point can only be pressed once
       nextStr = ''
    }

    if (calculated === true && operator == "") { // lets you type over current result in display
        if (number.length > 15) {
            nextStr = ''
         }
        number += nextStr
        numArr = []
        display.innerHTML = number
       
    }

    else if (operator == "" ) { //for making first number
        if (number.length > 15) {
            nextStr = ''
         }
   number += nextStr

       display.innerHTML = number
     
       }


    else if (operator != "") { //makes second number
        if (number.length > 15) {
            nextStr = ''
         }
number += nextStr
display.innerHTML = `${numArr[0]} ${operator} ${number}`
    }


}

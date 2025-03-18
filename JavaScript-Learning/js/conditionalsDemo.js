//Simple if else ladder
let num=20
if(num<10){
    console.log(`${num} is less than 10`)
}else if(num===10){
    console.log(`${num} is equal to 10`)
}
else{
    console.log(`${num} is greater than 10`)
}

//Ternary Operator
let age=18
let isEligible=age>=18?"yes":"no"
console.log(`isEligible:${isEligible}`)

//Switch Case
let grade="A"
switch(grade){
    case "A":
        console.log("Very Good!")
        break;
    case "B":
        console.log("Good")
        break;
    case "C":
        console.log("Not Bad")
        break;
    default:
        console.log("Not invalid!")
}

// Logical operators in Conditionals
num1=10
num2=22
isnum=true
console.log(num<=10 && num>30) //False
console.log(num1===10 || isnum(num1)) //True
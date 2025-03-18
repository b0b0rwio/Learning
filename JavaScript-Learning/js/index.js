// let a=101
// //console.log(a)

// {
//     let b=20
//     console.log(b+a)
// }
// // console.log(b) //Error - becuz let is local specific
let price=200
let product="shoe"
let tax=20
console.log(`productName:${product}`)
totalPrice=price+tax
console.log(`totalPrice:${totalPrice}`)



// para1=document.getElementById("p1").textContent=`Hola`
// para1=document.getElementById("p1").innerHTML+=" Dev!"
// let age=23
// console.log(`you are ${age} years old.`)

let age=23
let firstName="<b><i>bro</i></b>"
let lastName=`<b><i> not`
let student=false;

document.getElementById("p1").innerHTML=`Your age is ${age}`
document.getElementById("p2").innerHTML=`First name is ${firstName}`
// document.getElementById("p3").textContent=`name is ${firstName}`
// output: name is <b><i>bro</i></b> - cause textContent doesn't parse the html elements
document.getElementById("p3").innerText=` ${lastName}`



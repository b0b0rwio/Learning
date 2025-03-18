console.log(`before declare num: ${num}`) // undefined - becuz var assign undefined in the memory phase

var num=3

console.log(`getName:${getName}`)
console.log(`getName2:${getName2}`)
getName("Raj")
// //getName2("Fredy") // if we try to use arrow function before it initialized, it throws an error becuz it 
//                                        arrow function as variable not as function

function getName(name){
    console.log(`Your name is ${name}`);
}

var getName2=(name)=>{
    console.log(`your name is  ${name}`)
}
getName2("Fredy")
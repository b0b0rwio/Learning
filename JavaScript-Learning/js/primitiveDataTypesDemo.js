//Primitive DataTypes - numbers, Strings, Boolean , Undefined, Null
let v1=10
let v2=3.14536
let v3=" Space is Cold! "
let v4=true
let v5=null
let v6;
console.log(typeof v1)
console.log(typeof v2)
console.log(typeof v3)
console.log(typeof v4)
console.log(typeof v5)
console.log(`v6=${v6}`)
console.log(typeof v6)

console.log(`Round of v2:${v2.toFixed(2)}`)
console.log(`Precision 2 of v2:${v2.toPrecision(4)}`) // also consider for no.of.digits in the number not actual round off
console.log(`Lenght of v3:${v3.length}`)
console.log(`Trim:${v3.trim()}`) // changes doesn't apply directly
console.log(`strip:${v3.slice(1,6)}`)

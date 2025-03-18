//let-const-var
let a=10
{
   a=21
   console.log(`inside the block: ${a}`) // 21
}
console.log(a) // 21

// console.log(d) - Error, Because JavaScript runs code line by line in a synchronous manner by default

// {
//     let b=10
//     const c=33
// }
// console.log(b+c) - Throws an Error Becusz - let, constant are block scoped

const num=10
//num=11 // throws an error
console.log(num)

{
    var d=103
}
console.log(d)
let a=10
{
   let a=21
   console.log(`inside the block: ${a}`)
}
console.log(a)

// console.log(d) - Error, Because JavaScript runs code line by line in a synchronous manner by default


// Throws an Error Becusz - let, constant are block scoped
// {
//     let b=10
//     const c=33
// }
// console.log(b+c)

{
    var d=103
}
console.log(d)
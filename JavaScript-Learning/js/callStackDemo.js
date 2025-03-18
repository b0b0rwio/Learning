var n=2 
console.log(n)
function square(num){
    var ans=num*num
    return ans
}
var num1=square(2)
console.log(num1)

// GEC - n:2, Square:{...}, num:Square(2) [in memory phase]
// EC-1 - inside the GEC(Execution phase) - (num:undefinded, ans:undefined in memeory phase)
// CallStack- is the execution mechanism for the javascript in the Execution phase of Execution context
//           |   |  
//           |EC1|
//           |GEC| -> popped after all execution phases is done
//           |___|
var n=2 
function square(num){
    var ans=num*num
    return ans
}
var num1=square(2)
console.log(num1)

// GEC - n:2, Square:{...}, num:Square(2) [in memory phase]
//EC-1 - inside the GEC - (num:undefinded, ans:undefined in memeory phase)
// CallStack-
//           |   |  
//           |EC1|
//           |GEC| -> popped after all execution phases is done
//           |___|
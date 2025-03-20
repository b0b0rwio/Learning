//Simple closure
function outer() {
    let message = "Hello World!";
    return function inner() {
        console.log(message);
    }
    //return inner;
}

const closureFunction = outer();
closureFunction();

// Colsure with parameter
function add(num1){
    return function powerOf(num2){
        return num1**num2;
    }
}
let t1=add(5)
console.log(t1(2))
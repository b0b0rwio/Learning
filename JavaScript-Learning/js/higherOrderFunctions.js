// higher-order function is a function that takes one or more functions as arguments 
//                                                 or returns a function as a result.

function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}


const double = multiplier(2);
console.log(double)
console.log(double(5));


const numbers = [1, 2, 3, 4, 5];
console.log(numbers)
//Map
let sq=numbers.map(num=>num*num)
console.log(`Square of numbers:[${sq}]`)

//Filter
let oddNum=numbers.filter(num=>num%2==0)
console.log(`Odd numbers in arrary:[${oddNum}]`)

//Reduce
let sumOfAll=numbers.reduce((num1,num2)=>num1+num2,0)
console.log(`total:${sumOfAll}`)

//forEach
numbers.forEach(num=>console.log(num*10))

//find - find first matching element and retrun it
const firstOdd = numbers.find(num=>num%2!=0)
console.log(`firstOdd:${firstOdd}`)

//some()= or & every()= and & sort()-sorting and return new array
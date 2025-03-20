// Destructuring - unpack the value as individual data
//Array Destructuring
const numbers = [10, 20, 30];
const [a, b] = numbers;
console.log(a)
console.log(b)

//Object Destructuring
const person = { ename: "Alice", age: 25, city: "New York" };
const { ename, age, city } = person;
console.log(ename);
console.log(age);
console.log(city); 


//Spread operator - copying data to another
const obj1 = { "num1": 1, "num2": 2 };
const obj2 = { ...obj1,"num3": 3, "num4": 4 };
console.log(obj2)

//Rest operator - collecting the rest data
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first)
console.log(second)
console.log(rest)
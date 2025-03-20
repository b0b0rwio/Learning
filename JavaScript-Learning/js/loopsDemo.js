// Simple For loop
let forStr=""
for (let i=1;i<=5;i++){
    forStr+=i;
}
console.log(`forStr:${forStr}`)

//Simple While
let whileStr=""
let i=0
while(i<=5){
    whileStr+=i
    i+=1;
}
console.log(`whileStr:${whileStr}`)

//do-While
let doWhile=""
let j=10
do{
    doWhile+=j
    j+=1
}while(j<3)
console.log(`doWhile:${doWhile}`)

//for in
let person = { name: "Alice", age: 25, city: "New York" };

for (let k in person) {
    console.log(person[k]);
}

//for of
let fruits=["apple","banana","coconut"]
for(let fruit of fruits){
    console.log(fruit)
}


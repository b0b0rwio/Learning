//Regular Function
function greet(name){
    return `Hi, ${this.name}!`
}
console.log(greet("Bothi"))

//Function Expression - a function can be store in a variable
let func=function add(a,b){
    return a+b;
}
console.log(`Sum of ${2} and ${3} is ${func(2,3)}`)

//Arrow Functions - or nameless Functions

const sub=(a,b) => {return a-b};
console.log(`sub:${sub(10,7)}`)

//CallBackFunctions - a function is passed as an argument to a function, there it called the function
function Dev(name,funcName){
    console.log(`Hi Dev!`);
    //funcName(this.name) //undefined - because the function binds with window 
    funcName(name)
}
function welcome(name){
    console.log(`Welcome back ${name}!`)

}
Dev("Max",welcome)

// CallBack Function API Data Fetch Demo
function getData(url,func){
    fetch(url)
        .then(response => response.json())
        .then(data => func(data));
}

function display(data){
    console.log(data)
}   
getData("http://localhost:8080/course/availableCourses",display)

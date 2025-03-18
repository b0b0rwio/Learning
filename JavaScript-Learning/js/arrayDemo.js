let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits)
console.log(`Length of the array:${fruits.length}`)
console.log(fruits[fruits.length-1])
fruits[fruits.length]=65
console.log(`after adding a value (Length):${fruits.length}`)
console.log(fruits)
// console.log(fruits.sort())
fruits[5]=[1,2]
fruits_obj={
    "name":"Star Fruit",
    "color":"Green",
    "price":150
}
console.log(`keys:${Object.keys(fruits_obj)}`)
console.log("name" in fruits_obj)

fruits.push(fruits_obj)
console.log(fruits)
console.log(`fruits[6]['name']:${fruits[6]['name']}`)

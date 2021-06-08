a();
// b();
//1) Function Statement also know as function declaration
function a() {
    console.log("Function Statement");
}
//2) Function Expression (Assign a function to variable also thats called function expression)
var b = function () {
    console.log("Function Expression");
}

//3) Difference between function statement and function expression ? 
//(Hositing)
//Why hositing come into picture before functioncreated if i try to call the function  
//a() return the output 
//b() throws error TpeError : b is not a function


//4) Anonymous Function
//function doesnt have any name is called anonymous function 
//function it doesnt have own identity
//throws syntax error - function statements require function name
// function(){

// }

let c = function () {

}
//can write a  anoymousfunction and assign tat function to an variable 


//5) Named Function Expression
let x = function xyz() {
    console.log("names function expression")
    console.log(xyz);
}
x();
//xyz();
//you can access the named function inside xyz
//try to access xyz function outside throws an error.

//6) Difference between Paramters and arguments ?
var y = function (param1, param2, param3) {
    console.log("y called")
    console.log(param1)
}
//y('arg1','ag2') 
//value which your passing inside a function is called arguments
//you can pass anynoumus functionas an argument also 
y(function () {

})




//7) First Class Functions - what is first class function
//what is first class function . the ability to use functions as values is know as firt class functions
//in javascript functions are first class objects . 
//1)stored variable ,object ,or array 
//2)passed as an argument to a function 
//3) returned from a function
//https://www.freecodecamp.org/news/discover-the-power-of-first-class-functions-fd0d7b599b69/
//https://www.geeksforgeeks.org/difference-between-first-class-and-higher-order-functions-in-javascript/
//https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/
//1)JavaScript treats functions as objects and allow us to pass functions as parameter to another function and even return functions from other functions.
//2) In JavaScript the functions are first class functions meaning we can store them in variable, objects and array.

// let z = function () {
//     //it can return named function or anoynous function
//     console.log("z function called");
//     // return function(){

//     // }
//     return function xyz() {

//     }
// }
// console.log(z())
//eg1:firstclass function(sum & average)
function add(a, b) {
    return a + b
}
let sum = add
function average(a, b, fn) {
    return fn(a, b) / 2
}
let result1 = average(10, 20, sum)
console.log(result1)
//eg2:firstclass function(doublenumber)
let arr = [22, 33, 44, 55]
function doubleNum(element) {
    return element * 2;
}
function doubleArray(arr, fn) {
    let doubleArr = [];
    arr.forEach((element) => {
        doubleArr.push(doubleNum(element))
    })
    return doubleArr
}
let result2 = doubleArray(arr, doubleNum)
console.log(result2)

//functions are first class citizens that means first class function.
// 1)In javascript functions are alibilt to be used like value 
// 2)we can assign function to variable .
// 3)we can pass the function as an argument to the other function .
// 4)return another function .this is know as first class function.



//8)Arrow Functions - es6


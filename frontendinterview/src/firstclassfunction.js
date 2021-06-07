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

let z = function () {
    //it can return named function or anynous function
    console.log("z function called");
    return function xyz() {

    }
}
console.log(z())


//Arrow Functions


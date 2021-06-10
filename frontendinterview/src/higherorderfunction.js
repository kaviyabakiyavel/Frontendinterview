//Higherorder function 
//A function it takes another function as an argument or return the function from it is know as higher order function.

//here x is a callback function
function x() {
    console.log("Namaste");
}
//here y is an higher order function
function y(x) {
    x();
}


//eg1 : 
//calculate area of four circle  formula(π r²)
//calculate circumference formula(2πr)
//calculate diameter of circle(2r)
const radius = [3, 1, 2, 4];
// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output
// }
// console.log(calculateArea(radius))

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }
// console.log(calculateCircumference(radius))

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i])
//     }
//     return output
// }
// console.log(calculateDiameter(radius))


//Dry principle - dont repeat by yourself
//write the code optimized way
//reduce number of line 
//Functional programming  - beauty of functional programming -> creating a resuable function/component (resuability,modularity,)

//area , circumference, diameter is callback functions 
const area = function (radius){
    return Math.PI * radius * radius
}
const circumference = function(radius){
    return 2 * Math.PI * radius
}
const diameter = function (radius){
    return 2 * radius
}
//higher order function
const calculate = function (arr,fn) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(fn(arr[i]));
    }
    return output
}
console.log(calculate(radius,area))
console.log(calculate(radius,circumference))
console.log(calculate(radius,diameter))

// console.log(radius.map(area));
// here map is a calculate function ;
// code for map //kinf of polyfill
Array.prototype.calculate = function(fn){
    console.log("this",this)
    const output = [];
    for(let i = 0 ; i < this.length ; i++){
        output.push(fn(this[i]));
    }
    return output;
}
console.log(radius.map(area));
console.log(radius.calculate(area));


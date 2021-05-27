//declaring function
// let multiply = function(x,y){
//     console.log(x * y);
// }
// let multiplybytwo = multiply.bind(this,2,3);
// multiplybytwo(5); //invoking the function
// let multiplybythree = multiply.bind(this,3);
// multiplybythree(5); //invoking the function
//bind takes the copy of multiply function

//function currying  
// let multiply = function (x) {
//     return function (y) {
//         console.log(x + y)
//     }
// }
// let multiplybytwo = multiply(2);
// multiplybytwo(3);

//conculsion
// one way is to doing by bind method 
// another way is doing by currying - fucntion currying invloved closure

//https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
//functional programming is a style of programming -> that pass function as an arguments(callbacks) and return functions without any side-effects 
//concepts : Pure functions , currying , higer order functions .
//1) currying is developed by haskell curry.
//2) currying functions - A curried function is a function that takes multiple arguments one at a time.
//for building currying function we use closures.

// var add = function (a) {
//     return function (b) {
//         return a + b;
//     }
// };
// var addToFive = add(5);
// console.log(addToFive)
// // function (b) {
// //     return 5 + b;
// // }
// console.log(addToFive(1))
// // return 5 + 1;


//https://www.youtube.com/watch?v=iZLP4qOwY8I
//currying it doesnt take all the arguments upfront .
//Instead it will take first arguments and then function return another function 
//which you supposed to call with second argument which in turn will return a new function .
//which you supposed to call with the third argument and so on.
//untill all the arguments been provided/
//and at the end function will return the value that you actually  
//sum(1)(2)(3)(4) ...........(); //10
// let sum = function (a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function (e) {
//                     ///so on 
//                     //we will see how to slove this problem recursively 
//                 }
//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4)())

//es5
let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a
    }
}
console.log(sum(1)(2)(3)(4)())


//es6
let sum1 = (a) => {
    return (b) => {
        return (b) ? sum1(a + b) : a
    }
}
console.log(sum1(1)(2)(3)(4)())

//single line statement 
let sum2 = a => b => { return b ? sum(a + b) : a }
console.log(sum2(1)(2)(3)(4)())
//closure is a function bundled together with the lexical environmnet 
//what is closure  - function along with the lexical scope bundled together form the closure.
//can able to access to variable of the parent lexical environment.
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//instead of you can return the function 
// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y; //after returning also maintain there lexical scope 
// }
// let z = x(); //when invoking x function -> it return y //output return y function
// console.log("z",z)
// z(); //output 10


//similar code 
// function x(){
//     var a = 10;
//     return function y(){
//         console.log(a);
//     } 
// }
// let z = x(); 
// console.log("z",z)
// z(); //output 10

// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// z(); //output 100

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();

//7,900

// uses of closures :
// 1) module design patterns 
// 2) currying 
// 3) function like once
// 4) memoize
// 5) maintaining state is async world
// 6) setTimeouts
// 7) Iterators
// 8) and may more 

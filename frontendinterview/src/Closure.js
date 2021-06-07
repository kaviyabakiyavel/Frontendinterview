//function along with reference to its outer environment togther form the closure.
//closure is the combination of the function and its lexcial scope bundle together form the closures.
//explain lit bit more about it?
//in javascript inner function have the access to the variable & functions to the parent lexical scope.
//Even function executed in othere scope not in the original scope still remeber the value.

//eg1
// function outer() {
//     var a = 10;
//     function inner() {
//         console.log("a", a);
//     }
//     return inner;
// }
// var x = outer();
// x();

// //eg2 var 
// function outer() {
//     function inner() {
//         console.log("a", a);
//     }
//     var a = 10;
//     return inner;
// }
// var x = outer();
// x();

// //eg3 let 
// function outer() {
//     function inner() {
//         console.log("a", a);
//     }
//     let a = 10;
//     return inner;
// }
// var x = outer();
// x();

// //eg4 return statement in function
// function outer() {
//     var a = 10;
//     return function inner() {
//         console.log('a', a);
//     }
// }
// var x = outer();
// x();

// //eg5 passing parameter
// function outer(b) {
//     var a = 10;
//     function inner() {
//         console.log(a, b)
//     }
//     return inner;
// }
// var result = outer("helloworld");
// result();

//eg6 nested function
// function outest(){
//     var c = 20;
//     function outer(b){
//         var a = 10;
//         function inner(){
//             console.log(a,b,c)
//         }
//         return inner;
//     }
//     return outer;
// }

// var result = outest()('helloworld');
// result();

//eg7 conflicting name
// function outest(){
//     var c = 20 ;
//     function outer(b){
//         var a = 10;
//         function inner(){
//             console.log(a,b,c)
//         }
//         return inner;
//     }
//     return outer;
// }
// var a = 100;
// var result = outest()('helloworld');
// result();
//output : 10,helloworld,20

//eg8 //remove var a insideouter function
// function outest(){
//     var c = 20 ;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c)
//         }
//         return inner;
//     }
//     return outer;
// }
// var a = 100;
// var result = outest()('helloworld');
// result();
//output : 100,helloworld,20

//eg:9 if var a is removed in global - throw reference error
// function outest() {
//     var c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c)
//         }
//         return inner;
//     }
//     return outer;
// }
// var result = outest()('helloworld');
// result();
//output : refernce error a is not defined


//Advantage of closures 
//closure used in function curying
//closures are used in higherorder function , memoize .
//closure used in data hiding and encapsulation.


//data hiding - when we have a variable ,we have some data privacy on over it
//other function or other piece of code cannot have access over the data. 
//eg:anyboady can access the counter . so we have to wrap it inside function.
// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//     }
// }
// console.log(count) //output reference error : count is not defined

//now count is enclosed with counter function .
//suppose want to access the count variable .
//return the function (incrementcounter)

// function counter() {
//    var count = 0;
//    return function incrementCounter() {
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1(); //1
// counter1(); //2
// var counter2 = counter();
// counter2(); //1
// counter2(); //2
// counter2(); //3

//it will increment the counter 
//its good way t access it 


//by using constrctor function can wirtten increment and decrement 
function Counter(){
 var count = 0 ;
 this.incrementCounter = function(){
     count++;
     console.log(count);
 }
 this.decremenntCounter = function(){
     count--;
     console.log(count);
 }

}
var counter1 = new Counter(); //constructor function //starting should be captial
counter1.incrementCounter();
counter1.decremenntCounter();


//disadvantage of closures
//Over consumption of memory (consume lot of memory)
//closed over variables or not garbage collector - it may causes memory leak

//what is garbage collector 
//so in c and c++ momory allocation - reallocation handled by the developer  
//but in javacript engine when ever there is unused variables . just take it out of memory 
//so it free the memory space .

//how closure and garbage collectors are related to each other 


//eg : 
function a(){
    var x = 0 , z = 20 ; //memory allocation happen for x  , memory allocation happen for z
    return function b(){
        console.log(x);
    }
}
//a(); 
//when function a is invoked .
//after function return x memory as to be free up by garbage collector 
//but x used inside b function .
var c = a();
c(); 
//after inner function excute completely .
// javascript engine removed the unused variables by using garbage collector .
//after function excution z value will be removed 


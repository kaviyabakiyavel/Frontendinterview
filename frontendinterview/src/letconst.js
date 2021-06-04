//what is temporal dead zone ?
//are let and const declarations hosited?
//SyntaxError vs referenceError vs typeError ?


//we can this even before initalized 
//memory allocated for variables and function even before single line of code is excuted
// console.log(b); // undefined
// console.log(a); //cannot access a before initalization


//when put debugger and see 
// b memory allocation happend and attached to global scope 
// b creating sepeate memory space
// a memory allocation happened and attached to script

// let a = 10;
// console.log(a); //value is printed 10
// var b = 100;


//let and var throws referenceError // becauseof the temporaldeadzone.
//https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/#:~:text=Temporal%20Dead%20Zone%20explained,scope%20until%20they%20are%20declared.

//what is temporaldeadzone ?
//temporaldeadzone is a time since  let variable was hoistied and till initialized the value. 
//once variable in temporal dead zone you can't access the variable.
//once it initalized value to tat variable only can able to access 
//output : reference error cannot able to access before initialization.
// console.log(a); 
// let a = 10;
// var b = 100;

// //you can able to access anywhere  after initailization .
// let a = 10;
// console.log(a); 
// var b = 100;


//conculsion : var vs let vs const 
//var 
//1)var is a function scope
//2)Var refers to the global object which is called window in the browser environmnet.
//3)in var you can redeclare the value 


//let vs const 
//1)let vs const is a block scope inside {} you can access the variable whichyou declared
//2)let and const are not assQigned with undefined in the creation phase, they exist but without any value and you can’t access them until they are assigned.😱 Interesting? for sure, but I will explain that in more detail in the Temporal Dead Zone section.
// but in const cant redeclare and cant reassign .
// let a = 10 ;
// let a = 100; //(redeclration)
//throws error syntaxerror : identifier 'a' has already been declared.

// let a ;
// const b = 100;
// a = 10;
// console.log(a); //output 10


//errors: 
// console.log(a);
// let a = 10; ;
// const b = 100;
// console.log(b);
//1)letconst.js:62 Uncaught ReferenceError: Cannot access 'a' before initialization

// let a ;
// const b 
// b = 100;
// console.log(b);
//2) Uncaught SyntaxError: Missing initializer in const declaration.

// let a = 100;
// const b = 1000;
// b = 10;
// a= 1000;
// console.log(a);
//3)Uncaught TypeError : Assigment to constant variables 
//it should be declared and initalized value together .

// console.log(c);
// let a = 10; ;
// const b = 100;
// console.log(b);
// 3) Uncaught ReferenceError: c is not defined at letconst.js:82


// let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
// -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
// -> level of strictness ... var<<let<<const.
// -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
//     let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
//     const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
// -> syntax error is similar to compile error. while type and reference error falls under run time error.
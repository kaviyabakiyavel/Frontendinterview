//if our file is empty javascrpit engine creates a global object.
//this equal to window 
//this === window //true

var a = 10; // refers to global space
function b(){ // refers to global space
    var x  = 10 ; // refers to local space
}

console.log(window.a)//10
console.log(a)//10 if ur not refering infront of a as window . by default it will consider as window object.
console.log(this.a); //10 this refers to window object
console.log(x)// throws error x is not defined . infront of x if not defined anything by default it refers to window object
//what is block scope ?
//what is block ?  code which is written inside curly braces {} eg: forloop , whileloop,dowhile,if-else so on ..
//what is scope ?  
// what is shadowing ?

if (true) {
    //combaining multiple statement together in a block . where javascript except only one statement.
    var a = 10;
    console.log(a);
}

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //10 //a is var refers to global object // referes to globalscope 
console.log(b); //throw error b is not defined 
console.log(c); //throw error b is not defined 


var a = 100; //a refers to glbal scope
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //10 a is overridden in the global scope

let b = 100; // b refers to Script scope because decalare using let variable 
{
    var a = 10;
    let b = 20; //this b refers to block scope
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(b); //100


const c = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(c); //100

//Three type of scope 
// 1)Global scope(var)
// 2)Script scope (let & const)
// 3)Block scope 



//illegal shadowing 
//here initally a is decalred by using let,as we studied let is not redeclared 
//again ur trying to redeclare the variable by using var so throws error 
let a = 20;
{
    var a = 20;
}
//throws error a has already be declared 

let a = 20;
{
    let a = 20;
}
// print output wont throw error 

//wise-versa
//here initally a is declared by using var,so you can redeclare the variable by using let 
//it wont throw any error 
var a = 20;
{
    let a = 20;
}
//wont throw error 


//follow the lexical scope pattern 
const a = 20;
{
    const a = 23;
    {
        const a = 200;
        console.log(a);
    }
}

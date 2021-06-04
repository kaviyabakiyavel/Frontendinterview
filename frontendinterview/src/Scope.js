//what is scope 
//where i can access the scope variable 
// function a(){
//     console.log(b); //b exist in the local memory space or not .
// }
// var b  = 10;
// a();


//https://www.youtube.com/watch?v=uH-tVP8MUs8
//what is lexical environment 
//where ever execution context created  a lexical enviroment also created 
//lexical enivronment is a local memory along with lexical enivronment of the parent.
//lexical enivronmen tin hierarchy

eg:
function a(){
    var b = 10;
    c ();
    function c(){
     console.log(b);
    }
}
a();
//10

//so function c is present physically inside a function 
//so function c lexically inside a 
//a is lexically inside global scope.
//c()=>a()=>globalexcutioncontext

// function a(){
//     c ();
//     function c(){
//      console.log(b);
//     }
// }
// a();
// var b = 10;
// console.log(b); 
//10

// function a(){
//     c ();
//     function c(){
//      console.log(b);
//     }
// }
// a();
// console.log(b); 
// b is not defined and its checked all the lexical environment .
//scope chain nothing but searching value to all its parent lexical scope .


//conculsion 
// what is lexical enironment - lexical environment is created when every globalexcutioncontext created
// lexical enivromnet means -> local environment + lexcial environmnet of parent 


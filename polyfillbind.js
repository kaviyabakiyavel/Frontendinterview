// let name = {
//     firstname: 'kaviya',
//     lastname: 'bakiyavel',
// }
// let printName = function (hometown,age,city) {
//     console.log(this.firstname + ' ' + this.lastname + ' ' + hometown + ' ' + age + ' ' + city);
// }
// let printmyName1 = printName.bind(name , "vellore" ,'23');
// printmyName1('Chennai');



// //writing custom bind method 
// //every funtion as access to the bind method 
// //similarly every function as to access for mybind method 
// //way to do put that mybind function inside "Prototype"
// //so mybind method can be acess for all the functions 


// //polyfill
// Function.prototype.mybind = function (...args) {
//     //arguments need to be handle
//     //extract the params by using args
//     console.log("this",this)
//     params = args.slice(1);
//     console.log("params",params)
//     //params returning array method . so use apply() method
//     let obj = this
//     //printNam2 args comes here 
//     //already we have params syntax . so concerate the params and args 
//     return function (...args2) {
//         //obj.call(args[0])
//         obj.apply(args[0],[...params,...args2])
//     }
// }
// let printmyName2 = printName.mybind(name ,'vellore','26');
// printmyName2('Chennai');


let name = {
    firstname: 'kaviya',
    lastname: 'bakiyavel',
}
let printPerson = function (village,city) {
    console.log(this.firstname + " " + this.lastname + "" + village  + " " + city)
}
Function.prototype.mybind = function(...args){
    let obj = this
    let params = args.slice(1); //from arr 1 make array
    return function (...args2) {
     obj.apply(args[0] ,[...params,...args2])
    }
}
let persondetails = printPerson.mybind(name, 'Thathanavalasai,bommikuppam,thirupattur')
persondetails('vellore')

getName(); //when u write function definition "it will copy the entire function into memory address and return tat value"
//getName1() //getname1 is not a function
// getName2() //getname2 is not a function
// console.log(x);
//console.log(getName)
var x = 7;
function getName() {
    debugger
    console.log("Super Women - Javascript Course");
}
//console.log(getName)//not invokeing this function //printfunction

//arrow function 
//when u run , getname is not a function 
//Because function is assigned to variable  
var getName1 = () => {
    console.log("Super Women - Javascript Course");
}

var getNam2 = function () {
    console.log("new function")
}
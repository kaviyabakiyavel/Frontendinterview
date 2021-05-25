var user = {
    name : 'kaviya',
    age : 26 ,
    getName : function(surname){
        console.log(this)
        console.log("my name is " + this.name + surname ) //this key word refers to user object 
    }
}
//user.getName()
//when passing surname 
user.getName('sivan');

//bind
var user2 = {
    name:'bakiyavel',
    age : 50,
}
// var x = user.getName.bind(user2); //bind return function // first argument user2 object passing 
// x();
//when passing surname 
var x = user.getName.bind(user2); 
x('lakshmi');

var user3 = {
    name : 'jayanthi',
    age : 46,
}
var x = user.getName.bind({}); //passing empty object as a reference // name it ill print undefined
x();


//bind vs call and apply 
//bind return a function 
//call and apply directly excute 

user.getName.call(user3)
//when passing surname 
user.getName.call(user3,'Bakiyavel') //multiple parameter can pass by using comma seperate 

user.getName.apply(user3,['Bakiyavel','kaviya']) //parameter as to pass array of list in apply 


//https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/#:~:text=When%20we%20bind%20the%20this,scope%20they%20are%20defined%20in.
//when we assign this  function reference to some other vaiable  and invoke the function using this new reference .
//we get different value of this inside getName()
var name = 'hello';
var newfn = user.getName;
newfn();
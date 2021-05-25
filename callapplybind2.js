let user1 = {
    firstname : 'Kaviya',
    lastname : 'bakiyavel',
    printFullName :  function(...hobby){
        console.log(this.firstname + " " + this.lastname + " " + hobby);
    }
}
let user2 = {
    firstname : 'jayanthi',
    lastname : 'bakiyavel',
}
user1.printFullName()
//function borrowing  . each and every function as this method for access by using .call,.apply,.bind
user1.printFullName.call(user2 , 'working hard','cooking')
user1.printFullName.apply(user2 , ['singing',"drawing"])
let x = user1.printFullName.bind(user2, 'gardening');
x()

//new keyword 
new user1.printFullName(user2) //undefiend //return new empty object
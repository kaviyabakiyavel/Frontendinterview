//what is prototype ?
//what is prototype chaining?
//what is prototypal inheritance?

//inheritance - means  one object trying to access methods and properties of other object is called inheritance.

let arr = ["kaviya", 'bakiyavel'];
let object = {
    name: 'kaviya',
    city: 'vellore',
    getintro: function () {
        console.log(this.name + "from" + this.city);
    }
}
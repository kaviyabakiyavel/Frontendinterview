//function invoking behind the screen 
//before initalize the function we can able to call because of hositing "hositing will happen for fucntion declaration"
// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//     var x = 10;
//     console.log(x);
// }
// function b() {
//     var x = 100;
//     console.log(x);
// }
// //output 
// //10
// //100
// //1


var x = 1;
console.log(x);
a();
b();
function a() {
    var x = 10;
    console.log(x);
}
function b() {
    var x = 100;
    console.log(x);
}
// output :
// 1
// 10
// 100
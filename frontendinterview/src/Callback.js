//1) what is callback function in javascript ?
//Callback is a function passed as an argument to another function.
//as javascript is a synchronous and single-threaded language.
//Due to callback function we can do async in javascript.
setTimeout(function () {
    console.log("timer")
}, 5000);
function x(y) {
    //no x responsibilty to when y needs to excute callback function
    console.log("x");
    y();
}
x(function y() {
    console.log("y")
})

//2) Javascript is a synchronous and single - threaded language
//3) Blocking the main thread?  by using callstack to wont block the UI
//4) power of callbacks? do asyc calls



//5) deep about event listeners?
//let count = 0 //using global variable not good to do (achieve closure hiding the variabel)
// document.getElementById('clickMe').addEventListener('click', function xyz() {
//     console.log('Button Clicked',count++);
// })


//6) closures demo with Event listeners?
//achieve by using closure
function attachedEventListeners(){
    let count = 0
    document.getElementById('clickMe').addEventListener('click', function xyz() {
        console.log('Button Clicked',count++);
    })
}
attachedEventListeners
//7) scope demo with event listeners?
//check in inspect

//8) Garbage collection & removeEventListeners?

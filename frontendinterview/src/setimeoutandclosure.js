// function x(){
//     var a = 10;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("hello kaviya");
// }
// x();

function x() {
    for (var i = 1; i <= 5; i++) {
        console.log("hello" + i)
        setTimeout(function () {
            debugger
            console.log(i);
        }, i * 1000);
    }
    console.log("hello kaviya");
}
x();

//we expect output should be :
//hello kaviya
//1 //after 1sec
//2 //after 2sec
//3 //after 3sec
//4 //after 4sec
//5 //after 5sec


//Expected output :
//hello kaviya
//6 print five times 

// function x() {
//     //when ever loop excute i will be a new variable all together.
//     //callback function as new value of i in it.
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello kaviya");
// }
// x();


// function x() {
//     for (var i = 1; i <= 5; i++) {
//         //creates a new copy of i 
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, i * 1000);
//             console.log("hello kaviya");
//         }
//         close(i)
//     }
// }
// x();
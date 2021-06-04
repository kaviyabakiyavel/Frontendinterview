// function x() {
//     var a = 10;
//     setTimeout(() => {
//         console.log(a);
//     }, 3000);
//     console.log("hello kaviya");
// }
// x();

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
        console.log("hello kaviya");
    }
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

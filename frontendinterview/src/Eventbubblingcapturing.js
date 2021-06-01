
//If your not passed any 3rd argument in event listner function event will propagated (event bubbling) by default.
//by default 3rd argument consider by default false.(it works in event bubbling mode).
// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     });
// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked!");
//     });
// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("Child Clicked!");
//     });
//output:(when click on child)
//child => parent => grandparent


//passing 3rd argument false(work same like event bubbling mode)
// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     }, false);
// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked!");
//     }, false);
// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("Child Clicked!");
//     }, false);
//output:(when click on child)
//child => parent => grandparent

//if 3rd parameter pass true (work like event capturing)
//document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     }, true);
// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked!");
//     }, true);
// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("Child Clicked!");
//     }, true);
// output:(when click on child)
// grandparent => parent =>child

//This as some performance issues . so we will look how to stop the event propagation.
// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     }, true); //capturing 
// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked!");
//     }, false); //bubbling
// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("Child Clicked!");
//     }, true); //capturing
//output : (when click on child)
//grandparent -> child -> parent

// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     }, true); //capturing 
// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked!");
//     }, false); //bubbling
// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("Child Clicked!");
//     }, false); //bubbling
//output :(when clicked on child)
//grandparent -> child -> parent


//when we have a call back method inside eventlistener . we can access the event inside callback.
//by using event.propagation method we can stop the event.
// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     }, false); //bubbling 
// document.querySelector('#parent')
//     .addEventListener('click', (event) => {
//         console.log("Parent Clicked!");
//         event.stopPropagation();
//     }, false); //bubbling
// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("Child Clicked!");
//     }, false); //bubbling
//output (when click on child)
//child -> parent 

// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     }, false); //bubbling 
// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked!");
//     }, false); //bubbling
// document.querySelector('#child')
//     .addEventListener('click', (event) => {
//         console.log("Child Clicked!");
//         event.stopPropagation();
//     }, false); //bubbling
//output :
//child

document.querySelector('#grandparent')
    .addEventListener('click', () => {
        console.log("Grandparent Clicked!");
    }, true); //capturing 
document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log("Parent Clicked!");
    }, true); //capturing
document.querySelector('#child')
    .addEventListener('click', (event) => {
        console.log("Child Clicked!");
        event.stopPropagation();
    }, true); //capturing
//output :(when click on child)
//grandparent -> parent -> child

document.querySelector('#grandparent')
    .addEventListener('click', (event) => {
        console.log("Grandparent Clicked!");
        event.stopPropagation()
    }, true); //capturing 
document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log("Parent Clicked!");
    }, true); //capturing
document.querySelector('#child')
    .addEventListener('click', () => {
        console.log("Child Clicked!");
    }, true); //capturing
//output :when click on child
//grandparent
// document.querySelector('#catogory').addEventListener('click', (event) => {
//     console.log("Catogory parent clicked!");
//     console.log(event); //event.target tells exctaly inside this hierarchy which label i clicked.
//     console.log(event.target);//print the element
//     console.log(event.target.id);//print id
//     if (event.target.tagName === 'LI') {
//         window.location.href = "/" + event.target.id
//     }
// });

document.querySelector('#form').addEventListener('keyup', (event) => {
    console.log(event)
    if (event.target.dataset.uppercase != undefined) {
        debugger
        event.target.value = event.target.value.toUpperCase();
    }
});
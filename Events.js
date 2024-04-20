// events in javascript : 

// the changes in the state of an object is known as event.
// events are fired to notify code of "interesting changes" that may affect code execution.

// mouse events (click, double click, etc);
// keyboard events (keypress, keyup, keydown);
// form event(submit etc);
// print event and many more

let button = document.querySelector("button");

// button.onclick = () => {
//     console.log("button was clicked");
// }

// priority of inline event handling is less as compared to javascript event handling

// we can overwrite event handling code.

// event object : 
// it is a special object that has details about the event.
// all event handlers have access to the event object's properties and methods.

// button.onclick = (evt) => {
//     console.log("Button was clicked");
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.type);
    // console.log(evt.clientX);
    // console.log(evt.clientY);
// }


// event listeners : we can work with multiple event by using event listeners :
// we can also access event object inside event listeners.

// button.addEventListener("click",(evt) => {
//     console.log("button was clicked, and this is first event");
// });

// button.addEventListener("click",(evt) =>{
//     console.log("this is second event")
//     // console.log(evt.type);
// });
// let event3 = () => {
//     console.log("this is event three");
// }
// button.addEventListener("click", event3);
// button.removeEventListener("click", event3);

// note : the callback reference should be same to remove.

let mode = "light";
button.addEventListener("click",() => {
    console.log("you have changed the background color");
    // document.body.style.backgroundColor = "lightgreen";

    if(mode === "light"){
        mode = "dark"
        document.body.style.backgroundColor = "lightgreen";
    }
    else{
        mode = "light";
        document.body.style.backgroundColor = "darkgreen";
    }
    console.log(mode);
});



 

// console.log(button);
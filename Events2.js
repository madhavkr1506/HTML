let div = document.getElementsByTagName("div");
// console.log(div[0]);
// console.log(div[0].children[0]);
// div[0].children[0].style.backgroundColor = "yellow";

let button = document.querySelector("button");
// button.innerText = "click";
// console.log(button);

let mode = "light";

button.addEventListener("click", () => {
    if(mode === "light"){
        mode = "dark";
        // document.body.style.backgroundColor="lightpink";
        div[0].classList.add("streaming");
        div[0].classList.remove("streamed");
    }
    else{
        mode = "light";
        // document.body.style.backgroundColor = "darkred";
        div[0].classList.remove("streaming");
        div[0].classList.add("streamed");
    }
});



/* write a program to create a button using javaScript */

// let newButton = document.createElement("button");
// newButton.innerText = "Click Me !";
// console.log(newButton);

// give some style to this button

// newButton.style.backgroundColor = "skyblue";
// newButton.style.color = "white";


// console.log(newButton.style);

// let insertButton = document.body.prepend(newButton);

/* using javascript implement two different class css property on single paragraph element */

let paragraph = document.querySelector("div");
console.log(paragraph.children[0]);

// paragraph.children[0].setAttribute("class","para2");  //--> when we use setAttribute method it will completly remove influence of old attribute and implement influence of new attribute.

paragraph.children[0].classList.add("para2");
// paragraph.children[0].classList.toggle("para2");
// paragraph.children[0].classList.remove("para2");

// access .para1 class 
// let paraAtt = paragraph.children[0].getAttribute("class");
// console.log(paraAtt);



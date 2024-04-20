// {
//     window.alert("This is Madhav secret web page, if you are Madhav then click ok to enter password");
//     let password = "Madhav";
//     let userEnter = prompt("Welcome Madhav Kumar! please enter password to get access of the webpage : ")

//     let count = 3;  //--> Number of times user try password
//     let isCorrectPassword = false;
//     while(count > 0){
//         if(userEnter == null){
//             break;
//         }
//         if(password !== userEnter){
//             userEnter = window.prompt(`you are left with ${count} count! Enter correct password : `);
//         }
//         else{
//             isCorrectPassword = true;
//             break;
//         }
//         count--;
//     }

//     if(isCorrectPassword){ 
//         console.log("Congratulation you have entered right password");
//     }
//     else{
//         console.log("You have reached maximum limit");
//     }
// }


{
    // window object : the window object represents an open window in a browser. it is browser's object (not javaScript's) and is automatically created by browser.
    // it is a global object with lots of properties and methods.
// DOM when a webpage is loaded, the browser creates a Document object model of the page.
// Note : when we write script tag inside head tag then we cannot access document object. so, that's  the reason behind writing the script tag just before ending the body tag.
    // window->document->html->[1. head ->[meta, title, link]][2. body -> [1.div -> [img, p, div,h1]][2. script]]

    // console.log -> print
    // console.dir -> document -> properties and methods

    // console.log(alert);

    // console.log(window);
    // console.dir(window);

    // Note : console.log is also a part of window object

    // window.console.log("Hello Madhav");

    // prompt, alert and many more properties and methods are also part of window object.
    // we don't need to use window keyword always in our code, because it is already specified by browser.

    // when we attach our html file with javascript, then we can access all html element inside javascript file (all html element convert into object inside javascript file and we call it as document).

    // all html codes are available in the document object and this document object is available in the window object

    // we can also print it directly but whenever we have to print object we use console.dir();
    // console.log(window.document);

    // when  we have to see properties of document object
    // console.dir(window.document);

    // console.dir(window.document.body);  //--> access body properties and method

    // console.log(window.document.body); //--> print all html code
    // console.log(window.document.head); //--> print all html code

    // console.log(window.document.head.childNodes[2]); //print html code of childNode

    // we can perform dynamic changes on the webpages using javaScript

    // window.document.body.style.background = "black"; // --> here in js file we have written code so it is fixed inside the js file.

    // we we write same code on console it will chanage it dynamically.

    // DOM manipulation : 

    // selection with id 
    // document.getElementById("ID");
    // let heading = document.getElementById("heading"); // --> heading should be unique for each element
    // console.log(heading);
    // console.dir(heading); // print its properties and methods

    // selecting with class // --> class can be same for multiple element : 
    // document.getElementByClassName("className"); // --> it has prototypes of htmlcollection[html collection is very similar to an array like its index start from 0]
    // note if class name will not exists it will print null.
    // let className = document.getElementsByClassName("Class1");
    // console.log(className);
    // console.dir(className);

    // selecting with tag
    // document.getElementByTagName("tagName");

    // let p = document.getElementsByTagName("p"); // --> it has also prototypes of html collection.
    // console.log(p);
    // console.dir(p);

    // Access by tag

    // let firstP = document.querySelector("p") // --> it will return the first element within the document that matches the specified selector or group of selectors.
    // console.log(firstP);
    // console.dir(firstP);

    // when we need all matching elements
    // let allP = document.querySelectorAll("p"); // it has prototypes of nodeList
    // console.log(allP);
    // console.dir(allP);

    // Access by class

    // let firstP = document.querySelector(".Class1");
    // console.log(firstP);
    // let allP = document.querySelectorAll(".Class1");
    // console.log(allP);

    // Access by id

    // let firstH = document.querySelector("#heading");
    // console.log(firstH);

}

let firstele; // make it in global scope, so that you can directly access it from console

{
    // DOM manipulation : 

    // tagName : return tag for element nodes
    // firstele = document.querySelector("#heading");
    // console.dir(firstele);
    // console.log(firstele.tagName);

    // console.log(document.body.firstChild);
    // console.log(document.body.lastChild);

    // innerText : return the text content of the element and all its children

    // firstele = document.querySelector("div");

    // console.log(firstele.innerText);

    // console.log(firstele.innerHTML);

    // console.log(firstele.textContent);

    // console.log(document.body.children[0].children);

    // in DOM tree structure we have three types of nodes : 1.text node 2. comment node 3. element node
    
    // console.log(document.body.childNodes);
    // console.log(document.body.children[0].childNodes);

    // innerHTML : return the plain text or HTML contents in the element

    // console.log(firstele.innerHTML);

    // textContent : return textual content even for hidden elements

    // console.log(firstele.textContent);


}

{
    firstele = document.getElementsByTagName("div");
    firstele[1].innerText = firstele[1].innerText + ".com";
    console.log(firstele[1].innerText);
}







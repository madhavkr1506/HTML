//  code to get today date : 
const todaydate = new Date();

// code to calculate no of days in a month : 
let daysInMonth = new Date(todaydate.getFullYear(), todaydate.getMonth() + 1, 0).getDate();

// array that store Month name : 
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthHeader = document.querySelector("#month");

// code for header section to get Month Name :
monthHeader.innerText = todaydate.getDate()+" "+monthNames[todaydate.getMonth()];

let date = document.querySelectorAll(".date");

// code to mark date on button
date.forEach((d,index) => {
    if(index < daysInMonth){
        d.innerText = index + 1;
    }
    else{
        d.style.display = "none";
    }
});

// code for highlight today date
date.forEach((d) => {
    if(d.innerText == todaydate.getDate()){
        d.style.boxShadow = "2px 4px red";
    }
});


// lets give unique id to each date
let dateId = 1;
date.forEach((date) => {
    date.id = "date"+dateId;
    dateId++;
});

// let textareas = [];
// date.forEach((date) => {
//     let dateid = date.id.replace("date","");
//     let textarea = document.createElement("textarea");
//     textarea.style.display = "none";
//     textarea.placeholder = "Add Event : "
//     textarea.id = "textarea"+dateid;
//     textareas.push(textarea);
//     date.addEventListener("click",()=>{
//         textareas.forEach((textarea) =>{
//             textarea.style.display = "none";
//         })
//         if(!date.contains(textarea)){
//             date.appendChild(textarea);
//             textarea.style.display = "block";
//         }
//     });
//     textarea.addEventListener("blur",()=>{
//         textarea.style.display = "none";
//     })
// });

// add textarea to each date and also assign ubique textarea id

date.forEach((date) => {
    let dateid = date.id.replace("date","");
    let textarea = document.createElement("textarea");
    textarea.style.display = "none";
    textarea.placeholder = "Add Event : ";
    textarea.id = dateid;

    let savedtext = localStorage.getItem(dateid);
    if(savedtext){
        textarea.value = savedtext;
    }
    
    date.addEventListener("click",()=>{
        document.querySelectorAll("textarea").forEach((element) => {
            if(element.id !== textarea.id){
                element.style.display = "none";
            }
        });
        if(!date.contains(textarea)){
            date.appendChild(textarea);
            textarea.style.display = "block";
        }
        else{
            textarea.style.display = "block";
        }
    });
    textarea.addEventListener("blur",() => {
        localStorage.setItem(dateid,textarea.value);
        textarea.style.display = "none";
    });
    
});












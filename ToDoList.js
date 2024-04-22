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

// code to check any date for an event
date.forEach((d) => {
    d.addEventListener("click",()=>{
        console.log(`Date ${d.innerText} was checked`);
    });
});


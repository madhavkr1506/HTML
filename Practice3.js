console.log("Welcome Madhav");



{
    // using let keyword when we define any variable, the scope of that variable is only upto block.
    // when we use let while declaring variable : variable can not be redeclared, but we can update.
    // let num = 10;
    // console.log(num);
}
// console.log(num) ---> it will throw an error

{

    // var : scope[Global]
    // can be re-declared and updated.
    // var num = 10;
    // console.log(num);
}
// console.log(num);  ---> it will not throw an error


{

    // const : scope[Block]
    // it cannot be updated or re-declared.
    // const num = 10;
    // num = 20
    // console.log(num);
}
// console.log(num + 10);   ---> it will throw an error


// Datatypes in js : 
// Number,String,Boolean,Undefined,Null,BigInt,Symbol

// {
//     let num1 = 10;
//     let num2 = 10.1;
//     // num1 and num2 both are of number type.
//     console.log(typeof num1);
//     console.log(typeof num2);

//     let name = "Madhav";
//     let letter = 'M';
//     // name and letter both are string type.
//     console.log(typeof name);
//     console.log(typeof letter);

//     let bool = true;
//     console.log(typeof bool)

//     let a = null;
//     console.log(typeof a);

//     let b = undefined;
//     console.log(typeof b);

//     let bigint = 11111111111111111111111111111n;
//     console.log(typeof bigint);

//     let symbol = Symbol("$");
//     console.log(typeof symbol);
// }


// non premitive data types in javascript : objects --> (Arrays, functions)
// non premitive data types can be NULL
// non premitive data types are created by programmer.
// it's size is not fixed.
// objects : it is a collection of values of premitive data types. generally values are stored in key : value pairs.
// we can declare objects with const and let keyword.

{

    // write a program to create an object in javascript.
    // let State_Info = {
    //     State : "Bihar",
    //     Literacy : 71.9,
    //     Population : 120000000,
    // };

    // code for printing type of State_Info
    // console.log(typeof State_Info);
    // code for printing type of state
    // console.log(typeof State_Info.State);

    // code for printing state value : 1st approach
    // console.log(State_Info.State);
    // code for printing state value : 2nd approach
    // console.log(State_Info["State"]);
    // we can also update object[key] values even it is declared as const until we update all values of object.
    // console.log(State_Info["Literacy"] + 2);

}
// console.log(typeof State_Info) --> it will give undefined as output. 

// javaScript string

{
    // let name = "Madhav";
    // let DOB = 1506;
    // let addNameDOB = name + DOB;   // --> it will add 1506 to Madhav
    // console.log(addNameDOB);
}

// --------------------------------------------------------------


// Operators and conditional statements : 

// comments in javaScript : 


// this is single line comment
/*
this is 
multi line comment

*/

// operators : perform some operation : 

// 1. Arithmetic operators : +, -, *, /, %, **(exponential), ++(increment), --(decrement)
// 2. Assignment operators : =, +=, -=, /=, %=, **=
// 3. Comparison operators : ==, !=, ===(equal to & type), !==(not equal to & type), >, <, <=, >= --> it will return boolean value [true or false]
// 4. String operators : 
// 5. Logical operators : &&, ||, !
// 6. Bitwise operators : 
// 7. Ternary operators : 
// 8. Type operators : 


// conditional statements : to implement some condition on code

{
    // let mode = "red";
    // let color;

    // multiple if statement : 

    // if(mode === "dark"){
    //     color = "black";
    // }
    // if(mode === "light"){
    //     color = "white";
    // }

    // if-else statement

    // if(mode === "dark"){
    //     color = "black";
    // }
    // else{
    //     color = "white";
    // }

    // else if statement : 

    // if(mode === "dark"){
    //     color = "black";
    // }
    // else if(mode === "light"){
    //     color = "white";
    // }
    // else if(mode === "blue"){
    //     color = "blue";
    // }
    // else{
    //     color = "fade color";
    // }
    // console.log(color)

}


// ternary operator : 

// let a = 150;
// let b = 20;

// let result = (a > b ? true : false);

// console.log(result);

{
    // switch statement : 

    // let a = 5;
    // let b = 6;
    // let operator = "&";

    // switch(operator){
    //     case "+" : 
    //     console.log("Addition : ",(a + b));
    //     break;

    //     case "-" : 
    //     console.log("Subtraction : ",(a - b));
    //     break;

    //     case "*" : 
    //     console.log("Multiplication : ",(a * b));
    //     break;

    //     case "/" : 
    //     console.log("Division : ",(a / b));
    //     break;

    //     default : 
    //     console.log(`Sorry we are out of ${operator}`);
    // }

}


{
    // alert("Hello Customer! this is a deadly warning to you!"); --> this is one time pop up message
    // let name = prompt("Enter your name : "); //-> how to take input from user
    // console.log(name);

    // switch(name){
    //     case "Madhav Kumar" : 
    //     console.log(`Your name is ${name}`);   //--> template literals
    //     break;

    //     case "Krishna" : 
    //     console.log(`Your name is ${name}`);
    //     break;

    //     case "Kishan" : 
    //     console.log(`Your name is ${name}`);
    //     break;

    //     case "Govinda" : 
    //     console.log(`Your name is ${name}`);
    //     break;

    //     default : 
    //     console.log(`Sorry we are out of ${name}`);
    // }

}


// ------------------------------------------------------------------

{
// loops are used to execute a piece of code again and again

// write a program to print table of 19
// let num = 19;

// using for loop : 

// for(i = 1;i <= 10;i++){
//     console.log(`${num} X ${i}`, (num * i));
// }

// using while loop : 

// console.log("Using while loop : ")
// let i = 1;
// while(i <= 10){
//     console.log(`${num} X ${i}`, (num * i));
//     i++;
// }



}


{
    // write a program to check whether a number is armstrong or not : 

    // let num = parseInt(prompt("Enter number : "))
    // let temp = num;
    // let sum = 0;
    // while(num != 0){
    //     let rem = num % 10;
    //     sum += (rem**3);
    //     num = Math.floor(num/10);
    // }
    // if(sum === temp){
    //     console.log("Armstrong number");

    // }
    // else{
    //     console.log("Not a armstrong number")
    // }
}


{
    // do while loop : 
    // it will always execute atleast one time 
    // let i = 10;
    // do{
    //     console.log("Madhav");
    //     i++;
    // }while(i <= 5);
}


{
    // for of loop : 
    // it helps in applying loop on String and array

    // let name = "Madhav";
    // let result =  ""
    // for(let i of name){  
    //     // Iterator
    //     result += i;
        
    // }
    // console.log(result);


    // for in loop : used for objects and arrays

    // let student = {
    //     name : "Madhav",
    //     regNo : 12213356,
    //     course : "CSE",
    //     mobile_no : 9693744950
    // };

    // for(let key in student){
    //     console.log(key," ",student[key]);
    // }

    // guess the number : 

    // let compNum = 51;

    // let userNum = parseInt(prompt("Enter number : "));

    // while(userNum !== compNum){
    //     userNum = parseInt(prompt("Wrong guess, Enter number again : "));

    // }

    // console.log("Congratulation you guess right number");


}


{
    // Strings : string is a sequence of characters used to represent text

    // let name = "Madhav";
    // code for finding string length 
    // console.log(name.length);
    // access each characters of a string
    // console.log(name[2]);

    // Template literals in javaScript : 

    // A way to have embedded expression in strings.
    // `this is a template literals`
    // let text = `this is a template literals`;
    // console.log(text);
    // console.log(typeof text);

    // sting interpolation : 
    // to create strings by doing substitution of placeholders

    // let sum = `the sum is ${1 + 2 + 3}`;
    // console.log(sum);

    // escape character : 
    // console.log("Madhav\nKumar");
    // \n--> for next line
    // \t--> for tab space

    // some built in function to manipulate a string

    // let Name = "Madhav";
    // string are immutable.
    //--> this will not change original string, this will return a new value.
    // console.log(Name.toLowerCase()); 
    // console.log(Name.toUpperCase());

    // let Name = "       Madhav    Kumar   ";
    // console.log(Name.trim());


    let text = "Lovely Professional University";
    // return a part of string
    // start value is inclusive
    // end value is non inclusive
    // console.log(text.slice(2,7));

    // console.log(text.slice(8));

    // let name = "Madhav";
    // let surname = "Kumar";
    // let fullName = name+" "+surname;
    // console.log(fullName);
    // console.log(name.concat(surname));


    // console.log(text.replace("L","M"));

    // console.log(text.charAt(7));



}

// --------------------------------------------------------------------------------

// Array and its methods

{
    // let name = [];
    // for(let i=0;i<10;i++){
    //     name[i] = prompt(`input name ${i} : `);
    // }
    // for(let Name of name){
    //     console.log(Name);
    // }

    // let NameofStudent = ["Madhav","Krishna","Rahul","Ravi","Rohan","Kishan"];

    // use array methods : 

    // access 2nd index element
    // console.log(NameofStudent[2]);

    // add element at last
    // NameofStudent.push("Shreya","Khushi");

    // console.log(NameofStudent);

    // delete element from end and return its value
    // let delValue = NameofStudent.pop();
    // console.log(NameofStudent);
    // console.log(`deleted value ${delValue}`);

    // add element at first position : 
    // NameofStudent.unshift("Hanuman");
    // console.log(NameofStudent);

    // delete element from first and return its value

    // let firstdel = NameofStudent.shift();
    // console.log(`deleted from first : ${firstdel}`);
    // console.log(NameofStudent);

    // concat two array
    // let number1 = [1,2,3,4,5];
    // NameofStudent = NameofStudent.concat(number1);
    // console.log(NameofStudent);

    // slice method : it will not change original array

    // console.log(NameofStudent.slice(2,4));

    // splice(startind,delCount,newEl) : we can add remove and replace value using splice. it will bring changes in original array.

    // console.log(NameofStudent.splice()); //--> it will not delete any element

    // replace value
    // NameofStudent.splice(1,2,"Kasi","Kailash");
    // console.log(NameofStudent);

    // add value

    // NameofStudent.splice(1,0,"Kasi");
    // console.log(NameofStudent);

    // remove element
    // NameofStudent.splice(1,2);
    // console.log(NameofStudent);

    // Note : in javaScript array is also a type of object.

    // console.log(typeof NameofStudent);

    // let number = [1,2,3,4,5];

    // console.log(typeof number); // --> it is an array, it has type of object.
    // console.log(typeof number[1]); // --> it is an array element, it has type of number.

    // convert number to string 

    // let stringnumber = number.toString(); // --> it will not change original array that is number.
    // console.log(stringnumber);
    // console.log(number);

    // console.log(typeof number[1]); // --> number type
    // console.log(typeof stringnumber[1]); // --> string type
    // console.log(typeof stringnumber); // --> string type
    

}


// -----------------------------------------------------------------------------------

{
    // function and method in javascript

    // function is a block of code that can be call whenever we need. function is independent to a object.
    // method is also a function but it is dependent to a object. method is linked with object.


    // const string = "Madhav";
    // console.log(string.toUpperCase()); 
    
    // in the above code, we can see that toUpperCase() is a method because it is linked with a object(string).

    // let num = 5;
    // console.log(num.toUpperCase()); // --> it will throw an error, because here toUpperCase is not a function.

    // write a program to print factorial of number

    // function factorial(num){
    //     let fact = 1;
        
    //     for(let i = num; i>= 1; i--){
    //         fact *= i;
    //     }
    //     return fact;
    // }

    // let factorialOfNumber = factorial(10);
    // console.log(factorialOfNumber);


    // write a function which will not take any parameter

    // function helloWorld(){
    //     console.log("Hello Madhav kumar");
    //     console.log("Hello Lovely professional university");
    // }

    // helloWorld();  //--> function call

    // function helps to reduce redundancy

    // arrow function in javaScript

    // it is a compact way of writing a function

    // write a program that will demonstrate an arrow function

    // program to find maximum subarray sum using kadane algorithm

    // let array = [-2, -3, 4, -1, -2, 1, 5, -3];
    // let maxsumSubArray = (array) => {
    //     let sum = 0;
    //     let maxi = Number.MIN_VALUE;

    //     for(let i=0;i<array.length;i++){
    //         sum += array[i];
    //         if(sum < 0){
    //             sum = 0;
    //         }
    //         if(maxi < sum){
    //             maxi = sum;
    //         }
    //     }
    //     return maxi;
    // };

    // console.log(`Maximum sum of subarray is : ${maxsumSubArray(array)}`);


    // write a javascript program to count number of vowels in a given string

    // const string = "lieutenant";
    // function countvowel(string){
    //     let count = 0;
    //     for(let i = 0;i < string.length;i++){

    //         // console.log(string.charAt(i)); // -->  it will print each character of string

    //         if(string.charAt(i).match(/[aeiou]/)){
    //             count++
    //         }
    //     }
    //     return count;
    // }
    // let countvowelinString = countvowel(string);
    // console.log(countvowelinString);


    // for each loop in array : 

    // forEach() method calls a function for each element in an array.
    // forEach() method is not executed for empty elements.

    // let array = [65, 44, 12, 4];

    // function square(item,index,arr){
    //     arr[index] = item * item;
    //     return arr[index];
    // }

    // array.forEach(square);
    // console.log(array);


    // write a program to print factorial of each element of an array

    // const array = [1,2,3,4,5,6,7];
    // function factorial(num){
    //     let fact = 1;
    //     for(let i=num;i>=1;i--){
    //         fact *= i;
    //     }
    //     console.log(fact);
    // }

    // array.forEach(factorial);


    // array map : map() create a new array from calling a function for every array element.
    // map() does not execute the function for empty elements.
    // map() does not change the original array.

    // const array =  [1,2,3,4,5,6,7];

    // function factorial(num){
    //     let fact = 1;
    //     for(let i=num;i>=1;i--){
    //         fact *= i;
    //     }
    //     console.log(fact);
    // }

    // array.map(factorial);

    // let result = array.map((num) => {
    //     let fact = 1;
    //     let t = num;
    //     while(t >= 1){
    //         fact *= t;
    //         t--;
    //     }
    //     return fact;
        
    // })
    // console.log(result);


    // filte array : create a new array and return true for condition or filter.

    // let array = [1,2,3,4,5,6,7,8,9,10];

    // let result = array.filter((num) => {
    //     return num % 2 == 0;
    // })
    // console.log(result);

    // array reduce : perform some operation and reduce the array to a single value.

    // let array = [1,2,3,4,5,6,7];

    // let result = array.reduce((prev,curr) => {
        
    //     return prev + curr;
    // })

    // console.log(result);

    // reduce() method exceutes a reducer function for array element.
    // reduce() method returns a single value : the function's accumulated result.
    // reduce() methid does not execute the function for empty array elements.
    // reduce() method does not change the original array.




     
    



}



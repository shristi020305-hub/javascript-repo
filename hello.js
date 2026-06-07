
// 
//
// let name="Shristi Soni";
// let isloggedIn=false;
// let data=null;
// let value;
// console.log("Age: " +age) 
// console.log("Name: " +name) 
// console.log("isloggedIn: " + isloggedIn) 
// console.log("Other Data: " + data) 
// console.log("Value: " + value) let num1 = 10;
// let num2 = 3;
// let num1 = 5;
// let age=23;
// let age2=20;
// console.log(`${age} + ${age2} ${age+age2}`);
// console.log(num1+=3);
// console.log(num1-=3);
// console.log(num1*=3);
// console.log(num1/=3);
// console.log(num1%=3);
// let add = num1 + num2;
//  console.log(num1, " + " ,num2 , " = " , add)
// console.log(`${num1} + ${num2} = ${add}`)

// console.log(num1 + " - " + num2 + " = " + (num1-num2))
// console.log(num1 + " * " + num2 + " = " + (num1*num2))
// console.log(num1 + " / " + num2 + " = " + (num1/num2))
// console.log(num1 + " % " + num2 + " = " + (num1%num2))




// let x=10;
// console.log("x: ",x);
// x++;
// console.log("x: ",x);
// x++;
// console.log("x: ",x);
// x++;
// console.log("x: ",x);
// x++;
// console.log("x: ",x);
// x--;
// console.log("x: ",x);
// x--;
// console.log("x: ",x);
// x--;
// console.log("x: ",x);x--;
// console.log("x: ",x);

// //Finding area of rectangle..Square,Cube and Average
// let x=4;
// let y=8;
// let z=3;
// console.log("Area of rectangle is:" ,x*y);
// console.log("square of x is:" ,x*x);
// console.log("cube of x is:" ,x*x*x);
// console.log("Average of x,y,z is:" ,x*y*z/3);

// //Simple Interest ..
// let principleAmount =1000;
// let rateOfInterest =10;
// let noOfyear =2;
// let interest=principleAmount*rateOfInterest*noOfyear/100;
// console.log("Interest:",interest);


// let p = 0;
// let q = ++p +  p++;
// console.log(p);
// console.log(q);



// let a=24;b=16;c=7;
// if (a>b){
//     if(a>c){
//         console.log(a,"is largest");
//     }
//     else{console.log(c,"is largest");

//     }
// }
// else {
//     if(c<b){
//         console.log(b,"is largest");
//     }
//     else{console.log(c,"is largest");

//     }
// }
// let per=prompt("Enter Your Percentage");

//prompt is used to take input from user
// if(per>=90 && per<=100)
//     console.log("Congratulations! You secured Excellent Class")
// else if(per>=70 && per<90)
//     console.log("Congratulations! You secured Distinction Class")
// else if(per>=60 && per<70)
//     console.log("Congratulations! You secured First Class")
// else if(per>=50 && per<60)
//     console.log("Congratulations! You secured Second Class")
// else if(per>=35 && per<50)
//     console.log("Congratulations! You secured Pass Class")
// else if(per<35 && per>=0)
//     console.log("Sorry You are Fail")
// else 
//     console.log("Please Enter Correct Result")

// let a=prompt("Enter Your Percentage");
// if(a>=1000 ){
//     console.log("you will get 10% discount");
//     console.log("your amount will be:", a*10/100);

// }


// else if(a>=500){
//     console.log("you will get 5% discount");
//     console.log("your amount will be:", a*5/100);
// }
// else{
//     console.log("sorry! you will not get any discount");
// }




// let num=prompt("Enter the no 1-7");
// switch (Number(num)) {
//     case 1:
//         console.log("today is sunday");
//         break;
//     case 2:
//         console.log("today is monday");
//         break;
//     case 3:
//         console.log("today is tuesday");
//         break;
//     case 4:
//         console.log("today is wedday");
//         break;
//     case 5:
//         console.log("today is thusday");
//         break;
//     case 6:
//         console.log("today is friday");
//         break; 
//     case 7:
//         console.log("today is saturday");
//         break;        

//     default:
//         console.log("please enter correct number..")
//         break;
// }


//  write a programe to declare marks and print pass or fail.
// let marks = prompt("enter your marks:");
// if (marks>=91 && marks<=100)
// {
//     console.log("execellent! you got A1 grade");
    
// }

// else if (marks>=81 && marks<=90)
// {
//     console.log("very good! you got A2 grade");
   
// }
 
// else if (marks>=71  && marks<=80)
// {
//     console.log("good! you got B1 grade");
   
// }

// else if (marks>=61 && marks<=70)
// {
//     console.log("not bad! you got B2 grade");
    
// }

// else if (marks>=51 && marks<=60)
// {
//     console.log("you got C1 grade");
  
// }

// else if (marks>=41 && marks<=50)
// {
//     console.log("you got C2 grade");
  
// }
 
// else if(marks<=40)
// {
//     console.log("sorry! you are fail");
    

// }
// else if(marks>=100)
// {
//     console.log("Please enter the correct marks");
    
// }
// let num = prompt("enter any no");
// let num =0;
// if(num>0){
//     console.log("given number is positive.");
// }
// else if(num==0){
//     console.log("given number is zero.");
// }
// else {
//     console.log("given number is negative.");
// }









// let input1 = prompt("enter any no");
// let num1= Number(input1);
// let input2= prompt("enter any number");
// let num2= Number(input2);
// let op = prompt("enter any symbol + - * /");

// switch (op){
//     case "+": document.write("<h1>" + num1 + "+" + "=" +(num1+num2) + "</h1>");
//         case "+": document.write("<h1>" + num1 + "+" + "=" +(num1+num2) + "</h1>"); 

//check whether a number is multiple of 10 or not.
// let num=467;
// if(num%10==0){
//     console.log(num," is multiple of 10");
// }
// else {
//      console.log(num," is not multiple of 10");
// }


//check whether the given number is leap year or not.

// let year=2028;
// if(year%4==0){
//     console.log(year," is a leap year");
// }
// else{
//     console.log(year," is not a leap year");
// }
// function welcome(name){
//     console.log("welcome to",name);
// }

// welcome("radha radha");
// welcome("radha krishna");


// function add(num1,num2){
//     console.log("addition of",num1,"and",num2,"is",num1+num2);
// }

// add(43,65);
// function subtract(num1,num2){
//     console.log("addition of",num1,"and",num2,"is",num1-num2);
// }

// add(43,65);
// function multiply(num1,num2){
//     console.log("addition of",num1,"and",num2,"is",num1*num2);
// }

// add(43,65);
// function divide(num1,num2){
//     console.log("addition of",num1,"and",num2,"is",num1/num2);
// }

// add(43,65);
// subtract(43,65);
// multiply(43,65);
// divide(43,65);



//  function check(num){
//     if(num%2==0)
//      return "num is even";
//     else
//         return "num is odd";
//  }
//  let result=check(56);
//  console.log(result)    

// const cal= (a,b) ->{
//     let add= a+b;
//     let sub= a-b;
//     let mul= a*b;
// }

// console.log(add(34,3));
// console.log(cal(34,3));


// console.log("Round 4.4 =",Math.round(4.4)); //4
// console.log("Round 4.5 =", Math.round(4.6)); //5

// const random= Math.random() //generate random no between 0 to 1
// const multiply = random *10000 // to get number between 1 - 1000
// console.log(Math.floor(multiply)) // use floor function to remove decimals

// console.log("Floor 4.9 =",Math.floor(4.9)); //4
// console.log("Ceil 4.2 =",Math.ceil(4.2)); //5

// console.log("Mininum: ", Math.min(10,23,7,8,45));
// console.log("Maximum: ", Math.max(10,23,7,8,45));
// console.log("Power: ", Math.pow(2,11)); //1024

// console.log("SquareRoot ", Math.sqrt(81));

// const create= Math.random() 
// const num = (1000+(random *1000));
// const _OTP=(Math.floor(num));
// console.log("OTP:",_OTP);


// let date = new Date(); // Date Object
// console.log("Full Date & Time ",date);
// console.log("Year ",date.getFullYear());
// console.log("Month ",date.getMonth()); // 0-11
// console.log("Day ",date.getDay());// 0 - sunday
// console.log("date ",date.getDate()); // date value 31
// console.log("Hour ",date.getHours());
// console.log("Minutes ",date.getMinutes());
// console.log("Seconds ",date.getSeconds());

// let yob=2000;
// console.log("Age: ", (date.getFullYear()-yob));


// const read= require("readline-sync");

// function calculateAge(yob){
//     let date = new Date();
//     return date.getFullYear()-yob;
// }
// function randomNumber(){
//     return Math.floor(Math.random()*100)+1;
// }
// function showCurrentDateTime(){
//     return new Date().toLocaleString();
// }
// function rollDice(){
//     return Math.floor(Math.random()*6)+1
// }
// while(true){
//     console.log("\n=======PERSONAL UTILITY APP======");
//     console.log("1. Calculate Age");
//     console.log("2. Random Number");
//     console.log("3. Current Date & Time");
//     console.log("4. Roll Dice");
//     console.log("5. Exit");
    
//     let input= read.question("Enter Your Choice");
//     switch(Number(input)){
//         case 1:
//             let yob= read.question("Enter Your Year of birth");
//             console.log("Age: ", calculateAge(yob),"Years");
//             break;
//         case 2:
//             console.log("Random Number: ", randomNumber());
//             break;
//         case 3:
//             console.log("date & time: ", showCurrentDateTime());
//             break;
//         case 4:
//             console.log("Roll Dice: ", rollDice());
//             break;
//         case 5:
//             process.exit();
//         default:
//             console.log("Enter Propr Choice");
//     }
// }

// //npm install readline-sync (run this in terminal)

// const read= require("readline-sync");

// let birthYear= read.question("Enter your Birth Year? ");

// let date = new Date();
// console.log("Age: ", (date.getFullYear()-birthYear));
// const student = {
//     name: "John",
//     age: 22,
//     course: "MERN",
//     address: "Newyork"
// }

// console.log(student);
// console.log("Name:",student.name); //access using .
// console.log("Age:",student.age);
// console.log("Course:",student["course"]);
// console.log("Address:",student["address"]); //access using []

// // How to Modify
// student.course = "FSD";
// console.log("Course Updated:",student);
// // Add new Property
// student.phone = "1234567890";
// console.log("Phone added",student);

// delete student.phone; //delete phone property
// console.log("After Delete",student);



// const student = {
//     name: "John",
//     age: 22,
//     course: "MERN",
//     address: "Newyork",
//     study(){
//         console.log("Studying...");
//         console.log("dancing...");
//         console.log("Singing...");

//         console.log("shouting...");
//     },
// }
// console.log(student.study());


// const read = require("readline-sync");
// let birthday=read.question("enter your birth day:");
// console.log(birthday);
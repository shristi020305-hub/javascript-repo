 const read= require("readline-sync");

// const countDown =(n)=>{
//     if(n==0)
//         return;
//     console.log(n);
//     countDown(n-1);

// }
// let a=read.question("enter:  ");
// countDown(a);



//factorial..
const factorial=(n)=>{
    if(n==1){
        return 1;
         }
    let a=n*factorial(n-1);
        
         return a;

    }
let input=read.question("Enter the no:");
console.log(`factorial of ${input}: ${factorial(input)}`);

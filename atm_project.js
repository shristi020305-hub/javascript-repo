const read=require("readline-sync");

let balance =100000;
function checkBalance(){
    return balance;
    
}
function deposite(amount){
  balance=balance+amount;
 return balance;
}
function withdraw(amount){
     balance=balance-amount;
    return balance;

}
while(true){
    console.log("\n========Personal App========");
    console.log("1.check balance:");
    console.log("2.deposite:");
    console.log("3.withdraw:");
    console.log("4.exit:");
    

let num=read.question("enter number according to your requirement 1-4:");
switch(Number(num)){
case 1: 
    console.log("Your current Balance:",checkBalance(),new Date().toLocaleString())
break;
case 2: let amount1=read.question("enter amount number which you want to deposite:");
     console.log(deposite(Number(amount1)),new Date().toLocaleString());
break;
case 3: let amount2=read.question("enter amount number which you want to withdraw:");
    console.log(withdraw(Number(amount2)),new Date().toLocaleString());
break;
case 4: process.exit();
break;
}
}



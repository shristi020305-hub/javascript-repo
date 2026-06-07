const read = require("readline-sync");
function calculateAge(yob){
    let date=new Date();
    return date.getFullYear()-yob;
    console.log(date.getFullYear()-yob)
}

function randomnumber(){
    let num=(Math.floor(Math.random()*100))+1;
    return num;
   
}
function currentDate(){
    
    return new Date().toLocaleString();
    console.log(new Date().toLocaleString());
}
function rollDice(){
    return Math.floor(Math.random()*6)+1;
}
while(true){
    console.log("\n ========Pesonal Info.========")
    console.log("1.caculate your age:");
    console.log("2.ranmdon number:");
    console.log("3.current date:");
    console.log("4.Roll Dice: ");
    console.log("5.exit:");

let num=read.question("enter number 1-5:");
switch (Number(num)){
    case 1:let age= read.question("enter your age:");
    console.log("\n your Age is",calculateAge(Number(age)));
    break;
    case 2:console.log(randomnumber());
    break;
    case 3:console.log("\n Its being ",new Date().toLocaleString());
    break; 
    case 4:
        console.log("Roll Dice",rollDice());
    break;
    case 5:
        process.exit();
     default: 
     console.log("\n enter corrcet number");   

}
}

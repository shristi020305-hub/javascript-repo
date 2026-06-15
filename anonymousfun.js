// //normal funtion
// const greet= function(){
// console.log("Hello! \u{1F64F}");

// }
// greet();
// //Anonymous function->function without name.
// setTimeout(function(){
//     console.log("======through Anonymous======");
//     console.log("\u{2764}\u{FE0F}");
//     console.log("Hello! \u{1F64F}");

// },5000)


//printing with 1sec of gaps.
const greet=function(){
for(let i=1;i<=5;i++){

setTimeout(() => {
    console.log(i);
},i*1000);
}
 console.log("\u{2764}\u{FE0F}");
 console.log("Hello! \u{1F64F}");
}
greet();
// const student = {
//     name: "John Doe",
//     age: 20,
//     grade: "A",
//     study() {
//         return `${this.name} is studying.`;
//     }   
// };
// console.log(student);
// console.log(student.name); // Output: John Doe
// console.log(student.age); // Output: 20
// console.log(student.grade); // Output: A    
// // Adding a new property
// student.major = "Computer Science";
// console.log(student); // Output: Computer Science
// student.age = 23;
// console.log(student);
// delete student.grade;
// console.log(student); // Output: { name: 'John Doe', age: 23, major: 'Computer Science' }
// console.log(student.study()); // Output: John Doe is studying.


// //this,constructor function,new..
// function vrindavan(name, age){
//     this.name = name;
//     this.age= age;
// }
// let yatri1= new vrindavan("Shristi", 25);
// let yatri2= new vrindavan("Adarsh", 30);
//  console.log("\n", yatri1.name ,"ne darsan kar liya hai");    
// console.log(yatri1);
//  console.log("\n", yatri2.name ,"ne bhi darsan kar liya hai");    
// console.log(yatri2);



// //object...with properties  and functions which is called method in object.
// const Student ={
//     name:"Shristi Soni",
//     age: 23,    
//     education: "FSD",
//     study(){
//         console.log("This is a method");
//         // let a=3,b=5;
//         // return a+b;
//     },

// }
// console.log(Student.name);//printing a property of object.
// Student.study();//this is calling  a method of object.
// //console.log(Student.study()) we will do this whenever called function return something and we want to print it.


// constructor for multiple object creating.
// function  Student(name , age){
//     this.name=name;
//     this.age=age;
//     this.introduction=function(){//this is function expression. 
//         console.log(`Hi I am ${this.name}. I am ${this.age} years old`);
//         return "thankyou";
//     }
// }
// let s1= new Student("Radha", 22);
// let s2= new Student("krishna",23);
// //console.log(s1);//this is calling a constructor object. 
// //console.log(s2.name);//this is printing, a particular properties of a object .
// s1.introduction();
// s2.introduction();
// console.log(s2.introduction());//printing the return value.


 


//prototype..this will not create extra memory for same function.
// function  Student(name , age){
//     this.name=name;
//     this.age=age;
    
// }
// Student.prototype.introduction=function(){//this is function expression. 
//         console.log(`Hi I am ${this.name}. I am ${this.age} years old`);
//         return "thankyou! \u{1F64F}";
//     }
// let s1= new Student("Radha", 22);
// let s2= new Student("krishna",23);
// //console.log(s1);//this is calling a constructor object. 
// //console.log(s2.name);//this is printing, a particular properties of a object .
// s1.introduction();
// s2.introduction();
// console.log(s2.introduction));//printing the return value.
// console.log("\u{2764}\u{FE0F}");





//for..in loop in object
// let user={
//  name:"Radha",
//  rollno:2323,
//  isAdmin:true,
//  marks:{phy:78,chem:87,maths:99,eng:88},
//  language:["hindi","english","avadhi"],
// }
// for(let key in user){
//     if(Array.isArray(user[key])){//accessing array in object.
//     console.log(key,": this is array");
//     console.log(user[key]);
    
//     }
//     else{
//     console.log(key,":",user[key]);}
//     };
// //"in"   to check whether the specified property is present in object or not.
// console.log("language" in user);
// console.log("age" in user);




//computed property name..
let feature1="username";
let feature2="email";
let feature3="method";
let users={
    [feature1]:"radha",
    [feature2]:"radha@krishna0203",
    [feature3]:function(){
        console.log("this is dynamic method");
    },
}
console.log(users);
users.method();

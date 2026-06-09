function Employee(id,name,department,salary){
this.id=id;
this.name=name;
this.department=department;
this.salary=salary;
this.displayInfo=function(){   //-> shows employee details
    console.log(`${this.name}...\n id= ${this.id} of the  ${this.department} department.\nEarning Rs.${this.salary}`)
    
}


this. increaseSalary=function(amount1){ //-> increase Salary
this.salary+=amount1;
return this.salary;
}
this.decreaseSalary=function(amount2){ //-> Decrease Salary
this. salary -= amount2;
return salary;
}  

this.bonus=function(){
    if(department=="IT"){
        console.log("you will get the bonus of Rs.10,000");
        return this.salary+=10000;
    }
    else{
        return "No Bonus";
    }
}
}  
let Employee1=new Employee(1001,"Radhamohan","IT",200000);
Employee1.displayInfo();
console.log("Now your salary is increased:",Employee1.increaseSalary(100));
console.log(Employee1.bonus());
console.log("===================\n");
let Employee2=new Employee(1303,"Radha","HR",10000);
Employee2.displayInfo();
console.log("Sorry! your salary is decreased:",Employee1.increaseSalary(100));
console.log(Employee2.bonus());
console.log("===================\n");
// let Employee3=new Employee(1043,"mohan","Finance",20000);
// Employee3.displayInfo();
// let Employee4=new Employee(1701,"Krishna","Sales",14000);
// Employee4.displayInfo();



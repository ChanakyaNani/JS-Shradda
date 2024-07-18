// Classes, OOPS, inheritance etc
// prototypes in JS
const student = {
    fullName : "chanakya",
    marks : 95,
    printMarks : function() {
        console.log('marks= ',this.marks);
    }
};

const employee = {// we created an employee object
    calTax(){ // we can write the function in an object directly
        console.log('Tax rate is 10%');
    },
  
};

const karanArjun = {
    salary: 50000,
    calTax: function(){
        console.log('Tax is 20%');
    }
};

// set prototype for karanArjun as employee to inherit the calTax() method by default.
//karanArjun.__proto__ = employee; // this is not recommended
Object.setPrototypeOf(karanArjun, employee); // this is the correct way to set the prototype.



class ToyotaCar {
    constructor(brand){
       // console.log('creating new object');
        this.brand = brand;
    }
    start(){
        console.log('Start');
    }

    stop(){
        console.log('stop');
    }
}

let fortuner = new ToyotaCar("fortuner");
let etios = new ToyotaCar("etios");


// INHERITANCE
class Parent {
    hello(){
        console.log('hello');
    }
}

class Child extends Parent {

}

let obj = new Child();

class Person {
    constructor(name){
        this.species = 'homo sapiens';
        this.name = name;
    }
    eat(){
        console.log('eat');
    }
    sleep(){
        console.log('sleep');
    }
    work(){
        console.log('do nothing');
    }
}

class Engineer extends Person{
    constructor(branch,name){
        super(name); // to invoke the parent class constructor
        this.branch = branch;
    }
    work(){ // method overriding. Child method will get called
        super.eat();
        console.log('solve problems, build something');
    }
}

let engObj = new Engineer('CSE','chanakya'); // inherits all the properties and methods of the parent.

class Doctor extends Person{
    work(){
        console.log('save lives');
    }
}

// Super keyword

class SoftwareEng extends Engineer{
    constructor(branch,name,tech){
        super(branch, name);
        this.tech = tech;
    }
    work(){
        console.log(`working in ${this.tech}`);
    }
}

let sofEng = new SoftwareEng('CSE','chanakya','JS');

// ERROR HANDLING

let a = 5;
let b = 7;

console.log("a+b =", a+b);
console.log("a+b =", a+b);
try{
    console.log("a+b =", a+c); // error. C is not defined
}
catch(er){
    console.log(er);
}
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);

try{

}
catch(err){

}
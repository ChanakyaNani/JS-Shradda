//console.log("Hello JS! Start learning");
//console.log('chanakya'); 

myName = 'chanakya';
age=  32;
console.log(myName+' '+age);
x = null;
y = undefined;
console.log(x+' '+y);
isFollow = true; //boolen type of values
console.log(isFollow);
// javascript is a dynamically typed language.
myName = 25;
console.log('my name is changed to '+myName);
//js interpreter will change the value and datatypes dynamically.
// = is an assignment operator. it is storing the value of another variagle
age2 = myName; // = copies the value of myname into age2 but the value of myName remains the same.
console.log(age2);
myName = 'my name again: chanakya';
console.log(myName+' '+age);
console.log(myName+' '+age2);
_age$ = 4; // only a letter, underscore or a dollar should be the 1st char
console.log(myName+' '+_age$);

var occupation = 'software engineer';
console.log('occupation is: '+occupation);
occupation  = 56;
console.log('occupation is: '+occupation);

let occupation2 = 'rock climber';
console.log('occupation is: '+occupation2);
occupation2 = 66;
console.log('occupation is: '+occupation2);

let price = 10;
let price2 = 20;

const PI = 3.14;
//price3 = 32; 
//console.log(price3);

let undVar;
if(undVar==undefined)
console.log('By default, undeclared variable is '+undVar+' not null');

//from ES6(2015) onwards we are using only let to declare the variables. 'var' keyword is out of commission
// var can be redeclared but not let.

// var is a global variable
// let has block scope

{

    let test = 4;
    console.log(test);

}

let test = 5;
console.log(test);
console.log(typeof test);

test = 'not a number';
console.log(typeof test);

// both arrays and functions are a subtype of  of an object

const student = { // generally we'll declare objects as const, sometimes let.
    sName  :'chanakya',
    age: 32,
    cgpa: 6.9,
    isPass : true
};
console.log(student);
let a = "age";
student[a] += 1;
student.cgpa +=0.5;
console.log(student);

const product = {
    prodName : 'pen',
    rating : 4.2,
    price : 270,
    offer : 5,
    isDeal : true
};
console.log(product);

const profile = {
    userName : 'chanakya',
    posts : 599,
    followers : 5422,
    pLink : "instagram.com/chanakyaNani",
    isFollow : false
};
console.log(typeof (profile["posts"]));
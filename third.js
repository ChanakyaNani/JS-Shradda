// https://www.youtube.com/watch?v=UmRtFFSDSFo&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=3&ab_channel=ShradhaKhapra
// LOOPS IN JS

// let sum = 0;
// let sum2 = 14
// for(let i=0;i<5;i++){
//     sum++;
// }
// console.log(sum);

// do{
//     console.log('sum in do is: '+sum);
//     sum--;
// }while(sum>0);

// while(sum>0){
//     sum--;
// }
// console.log(sum);

// iterate on loops
// for-of will only work for strings and arrays 
// let str = 'testName';
// let size =0;
// for(let i of str){
//     //console.log(i);;
//     size++;
// }
// console.log('string size of str is '+size);
// let str2 = ["12",'1','121'];// iterator i2
// for(let i2 of str2){
//     console.log('str 2 is '+i2);
// }

// for of is for strings and arrays
// for-in loop is for objects and arrays too
//every object should have different name
const student = {
    sName : 'chanakya',
    course : 'JS by shradha',
    age : 32,
    position : "ic4",
    currentJob : false
};
// for(let key in student){
//     console.log('key: '+key+' , '+'value: '+student[key]);
// }

// for(i=0;i<=100;i++){
//     if(i%2==0){
//         console.log('even: '+i);
//     }
// }

// let correctGuessNum = 43;
// let userGuess;
// do{
// userGuess = prompt('Give your guess');
// }while(userGuess!=correctGuessNum);
// console.log('Congratulations!, you have guessed correctly '+userGuess);

 let str = 'new\tSt  ring          ';
 console.log(`str is ${str}`); //

 console.log("str ",str); // 
 let num = 54;
 let arr = [1,2,'abc'];
 console.log('string property: Length '+str.length);

// console.log('string property: index 0 '+str[6]);

 console.log('string methods: toUpperCase() '+str.toUpperCase());
 console.log('string method: toLowerCase() '+str.toLowerCase());
 console.log('string method: trim() '+str.trim()); // it'll only remove white spaces from starting or end, not middle
 str = str.trim();
 console.log('string Length after trim '+str.length);
 console.log('string slice '+str.slice(1,3)); // ending value is optional and non inclusive

// template literals
let templateLiteral = `this is a template literal`;
let output = `Student name is ${student.sName}, course is: ${student.course}, \n age is ${student.age}`; 
// string interpolation, embedding the value in the string at the runtime via $ variables
let output2 = `This is a test of TL \t or variables ${arr[2].length}`;

console.log(output);
// strings are immutable in javascript
console.log(str.concat(output));

//replace
console.log(str.replace('\t',''));// replaces only the first occurance
//replaceAll will replace all
console.log(str.charAt(1));

let username;
let fullname = prompt('Enter your fullname');
username = '@'+fullname.replaceAll(' ','')+fullname.length;
console.log(`Your username is ${username}`);
// FUNCTIONS
function fname1(param1, n){ // param1 here is called function parameter
    console.log(param1+'number',n);
}

function fname2(){
    console.log('this is a function 2');
}

fname1("this is param 1",5);// the value we are passing to the function is called argument of the functions
fname2();

function sum(a,b){
    // a,b are the local variables valid only in this function(block) scope
    return a+b; // only one return value, either string, number, array, object but only 1(may be with many values inside the obj)
}

let s = sum(5,777);
console.log(s);

// arrow function

let arrowFunction = (a,b) => { // function variable.
    return a*b;
}

console.log(arrowFunction(4,5));

let arFunc = (a,b) => {
    console.log(a,b);
}
arFunc(5,1);

function countVowels(str){
    let nv = 0;
    let vowels = 'aeiou';
    for(let i of str){
        if(vowels.indexOf(i) != -1){
            nv++;
        }
    }
    return nv;
}

let vowelsInAWord = countVowels('aeiou');
console.log('vowels are', vowelsInAWord);

let nov = (str) => {
    let count =0;
    for(let c of str){
        if(c=='a' || c == 'e' || c=='i' || c == 'o' || c == 'u'){
count++;
        }
    }
    return count;
}

console.log('no of vowels are ',nov('aeiou'));

 let arr = [1,2,3,4,5];
 function myf(val){
    console.log(val);
     }
 arr.forEach((val, i, ar)=>{
    console.log(val+1, i, ar);
 });
// higher order functions are those which accept function as a parameter or return a function

var nums = [1,2,3,4,5];

// this is the call back function for the array only.
let calSquare = (val,v2)=>{ // we can only pass one parameter, 1st is value, 2nd is index and 3rd is array, they are automatically passed as an array callback function parameters
    console.log(val*v2);
}
console.log(calSquare(5,6));
//nums.forEach(calSquare);

let newArr = nums.map((val) => {
    return val*val;
});
console.log(newArr);

let stuArr = [43,96,11,76,98,90];

let above90 = stuArr.filter((val) => {
    return val>90;
});

console.log(above90);

let userInput = prompt('Enter your number');
let nArr =[];
for(let i=0;i<userInput;i++){
    nArr.push(i+1);
}

let sumArr = nArr.reduce((prev,cur)=>{
    return prev + cur;
});

let mulArr = nArr.reduce((prev,cur)=> {
    return prev*cur;
})
console.log('arr is ',nArr);
console.log('sum of arr',sumArr);
console.log('product of arr',mulArr);
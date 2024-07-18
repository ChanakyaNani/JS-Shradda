let a = 5;
let b = 6

let total = a/b;
console.log(total);
let reminder = a%b;
console.log(reminder);
let exponentiation = a++*b++;
console.log(exponentiation);
// post and pre increments after that line 

let a1 = 61;
let a2 = "5";
console.log(a1<a2 || a2<a1);

if(a1>18 ? true : false){
    console.log('going inside if');
}
else{
    console.log('going inside else');
}

let expr = 'papaya';
switch(expr){
    case 'papaya':
        console.log('this is papaya');
        break;
    case 'mango':
        console.log('mango');
}

//alert('hello');
let score = prompt('enter your score') ;
if(score>=80 && score<=100){
    console.log('Grade A');
}
else if(score>=70 && score<=79){
    console.log('Grade B');
}
else if(score>=60 && score<=69){
    console.log('Grade C');
}else if(score>=50 && score<=59){
    console.log('Grade D');
}else if(score>=0 && score<=49){
    console.log('Grade F');
}
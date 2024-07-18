var arr = [32,12,54,111];
console.log(arr);
arr[2] = 96;
console.log(arr);
//arrays are mutable, strings are immutable

// iterable : strings, objects, arrays - all are collections

// in for-in array, 'i' will take index of array or key of object
for(let i in arr){
    console.log(i+' '+arr[i]);
    
}
// in for-of, 'i' will take the value of the index 
for(let j of arr){
    console.log(j+' '+arr[j]);
}
for(let k=0;k<arr.length;k++){
    console.log(arr[k]+1);
}


let cities = ['hyd','bang','del','mum'];
for(let city of cities){
    console.log(city.toUpperCase());
}

let marks = [85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
    sum +=mark;
}
let avg = sum/marks.length;
console.log(`avg is ${avg}`);

let prices = [250,645,300,900,50];
for(let p in prices){
    prices[p] *= 0.9
}
console.log(prices);

//ARRAY METHODS
prices.push(432);
console.log(prices);
let delItem =[];// have to define a variable as an array first before using push on it
delItem.push(prices.pop());
console.log(prices);
delItem.push(prices.pop());
console.log(prices);
let stringPrices = prices.toString();
console.log(prices);
console.log(stringPrices);
console.log(stringPrices[3]);
console.log(delItem);
let changedPrices = [1,2,4,5,67,77];
let newPrices = prices.concat(delItem,changedPrices); // will return a new array, will not change existing arrays and can concat multiple arrays at the same time
console.log(newPrices);

let newCP = changedPrices.slice(1,4);
console.log(newCP);
let dcp = changedPrices.splice(1,2,66,88); // changes teh same array
console.log(changedPrices);
console.log('del '+dcp);

let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
//unshift the array companies
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log('final compnaies list ',companies);


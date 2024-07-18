console.log("Hi DOM");
let pageURL = document.URL; // window.document.URL bhi likhsakte, window is implicitly understood and known to script.js
console.log(pageURL);

// console.dir(window.document); to print document as an object
// console.log(document); will print html code
document.getElementById('heading');

let elements = document.querySelector("#heading");
console.dir(elements);

let div = document.querySelector("div");
console.log(div.getAttribute('class'));

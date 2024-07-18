// Fetch API
// request and response cycle
// API calls
// Application Programming Interface
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const getRandomFact = document.querySelector('#getRandomFact');


// let promise1 = fetch(URL);
// console.log(promise1);
//status 200 is succcessful response

 

const getFacts = async ()=>{
    console.log('getting data...');
    let response = await fetch(URL);
    console.log(response);
}

//getFacts();

async function getFacts2(){
    console.log('getting data (2)...');
    let response = await fetch(URL);
    console.log(response);// JSON format lo data vastundi. so we'll have to convert that JSON to JS object to be usable
    console.log(response.status);
    let data = await response.json();// .json() returns a second promise (after fetch() which returns the first promise), that is why we use the await, till we get the json data don't proceed.
    let r = Math.floor(Math.random()*5);
    factPara.innerText = data[r].text;
    console.log(factPara);
}

getRandomFact.addEventListener('click',getFacts2);

//getFacts2();

//request and response are both objects, we can use them accordingly
// if no options are given, by default it is a GET request fetch(URL);

// Response status codes
// 200- OK. 400 client error - not found, 500- server errors
// request and response headers contain various additional information
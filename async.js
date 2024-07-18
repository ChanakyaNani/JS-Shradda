// function getData(dataID, getNextData){
//     setTimeout(()=>{
//         console.log("data ",dataID);
//         if(getNextData)
//             getNextData();
//     },2000); //2s delay
    
// }

// // // getData(1);
// // // getData(2);
// // // getData(3);
// // // callback Hell problem -nested callbacks
// // getData(1,()=>{
// //     getData(2,()=>{
// //         getData(3);
// //     });
// // });


// // Promises
// let promise = new Promise((resolve, reject) =>{
//     console.log('im a promise');
//    // resolve("success");
//     //reject('some eerror');

// }) 

// function asyncFunc1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data 1');
//             resolve('success');
//         },4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data 2');
//             resolve('success');
//         },4000);
//     });
// }

// console.log('fetchingdata 1');
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res) ;
//     console.log('fetchingdata 2');
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//     console.log(res) ;
// })
// })

// p1.catch((err)=>{
//     console.log(err);
// })


//async function - always returns a promise
// async function hello(){
//     console.log('hello');
// }

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('weather data');
//             resolve(200);
//         },2000);
        
//     })
// }

// //await api();

// async function getWeatherData(){
//     await api();// 1st call
//     await api();// 2nd call
// }

// getWeatherData();

// once you write setTimeout, it becomes async function automatically. async function always returns a new promise
function getData(dataID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data ",dataID);
            resolve('success');
            //reject('errored out');
        },2000); //2s delay
    });
}

// Async- await
async function getAllData(){
    console.log('getting data 1...');
    await getData(1); // only when this promise succeeds, execution continues
    console.log('getting data 2...');
    await getData(2);
    console.log('getting data 3..');
    await getData(3);
}

getAllData();


// IIFE - Immediately invoked function expression. Called immediately.
(async function(){
    console.log('getting data 1...');
    await getData(1);
    console.log('getting data 2...');
    await getData(2);
    console.log('getting data 3..');
    await getData(3);
})();
// let btn1 = document.querySelector("#btn1");
// let a =25;
// btn1.onclick = (e) => { // e is an event object implicitly avialable of all event properties
//     console.log('btn1 clicked');
//     a++;
//     console.log(a);
// }

// let handler1 = (evt) =>{
//     console.log('event listened -1',evt.type);
// };

// function handler2(evt){
//     console.log('event listened - 2');
// }

// btn1.addEventListener("click",handler1);

// btn1.addEventListener("click",handler2);

// // btn1.removeEventListener("click", handler1);
// btn1.removeEventListener("click", handler2);

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curMode = "light";


modeBtn.addEventListener("click", ()=>{
    if(curMode === 'light'){
        curMode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else{
        curMode = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(curMode);
    console.log('classList',body.classList.value);
});
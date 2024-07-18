let boxes = document.querySelectorAll(".box"); // get all buttons with the class name "box"
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; // playerX, playerO

//2D array
const winPatterns = [ // winpatterns for 3x3 tic-tac
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const winPatterns2 = [
    // Rows
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    // Columns
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    // Diagonals
    [0, 5, 10, 15],
    [3, 6, 9, 12]
];


let oArr = [];
let xArr = [];
let winner = false;
function checkWinner(boxID){
    // get current box values
    if(turnO){
        oArr.push(parseInt(boxID));
        if(isWinner(oArr)){
            setTimeout(()=>{
                alert("Player O wins");
               // resetBoard();
            },100); // short delay to ensure rendering 
            winner = true;           
        }
    }
    else{
        xArr.push(parseInt(boxID));
        if(isWinner(xArr)){
            setTimeout(()=>{
                alert("Player X wins");
                //resetBoard();
            },100); // short delay to ensure rendering
            winner = true;
            //setTimeout(resetBoard,500);
        }
    }

    // check for draw when there is no winner
    if(!winner && (oArr.length + xArr.length == boxes.length)){ // don't use '==='
        winner = !winner; // to play the game continuously without resetting or refreshing- [NOT WORKING PROPERLY]
        setTimeout(()=>{
            alert("It's a DRAW");
            resetBoard();
        },100);
        
    }

}

/* winPatterns.some(...): The some method tests whether at least one element in the array passes the test implemented by the provided function. Here, it tests if at least one of the winPatterns results in a win.

pattern => pattern.every(...): For each pattern (which is an inner array like [0, 1, 2]), it checks if every element (num) in the pattern is included in the playerArr.

playerArr.includes(num): This checks if the current number (num) in the pattern is present in the playerArr (which contains the indices selected by the current player). */ 


function isWinner(playerArr){
    return winPatterns2.some(pattern => { // just change the name of winPatterns for 3x3 tic-tac or 4x4 tic-tac
        return pattern.every(num => {
            return playerArr.includes(num);
        });
    }); 
}
/*function isWinner(playerArr){
    return winPatterns.some(pattern => pattern.every(num => playerArr.includes(num)));
}*/


//set id's to each box
let boxID = 0;
boxes.forEach((box)=>{
    box.setAttribute('id',boxID);
    boxID++;
})
// add event listeners to each box
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if(box.innerText === ''){ // box.disabled = true; // we can also disable the box after writing the inner text once instead of this 'if' condition
            box.innerText = turnO ? "O" : "X";
            //check winning logic
            checkWinner(box.id);
            turnO = !turnO;
        }
        
    })
});

function resetBoard(){
    oArr = [];
    xArr = [];
    boxes.forEach((box)=>{
        box.innerText = "";
    })
}

resetBtn.addEventListener('click',()=>{
    resetBoard();
});

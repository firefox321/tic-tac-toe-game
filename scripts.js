
console.log("welcome to tic tac toe ")
let turnx = new Audio("click.mp3")
let win = new Audio("win.mp3")
let over = new Audio("over.mp3")
let turn = "X"
let isgameover  = false;

// Function to change turn 
const changeTurn = () =>{
    return turn === "X"? "O": "X"
}
//function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 4, 0],
        [3, 4, 5, 0, 11, 0],
        [6, 7, 8, 0, 19, 0],
        [0, 3, 6, -6, 11, 90],
        [1, 4, 7, 1, 11, 90],
        [2, 5, 8, 8, 11, 90],
        [0, 4, 8, 0, 11, 50],
        [2, 4, 6, 0, 12, 137],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            win.play()
            setTimeout(resetGame, 2000);
            
        }
    })
}


//game logic 
let boxes = document.getElementsByClassName("box"); 
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnx.play();
            checkwin();
            if (!isgameover){
                checkDraw();
            }
           
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})
// add onclick listner  to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    }); 
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 

})


const resetGame = () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    
}
const checkDraw = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let isDraw = true;
    for (let i = 0; i < boxtext.length; i++) {
        if (boxtext[i].innerText === '') {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        document.querySelector('.info').innerText = "It's a draw!";
        isgameover = true;
        over.play();
        
    }
}



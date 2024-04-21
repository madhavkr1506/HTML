

let GameArray = ["Rock","Paper","Scissor","Paper","Scissor","Scissor","Paper","Rock","Paper"];

let lenOfGameArray = GameArray.length;
let leftRotate = () =>{
    let first = GameArray[0];
    for(let i=0;i<lenOfGameArray - 1;i++){
        GameArray[i] = GameArray[i+1];
    }
    GameArray[lenOfGameArray - 1] = first;
}

let rightRotate = () =>{
    let last = GameArray[lenOfGameArray - 1];
    for(let i=lenOfGameArray - 1;i>0;i--){
        GameArray[i] = GameArray[i-1];
    }
    GameArray[0] = last;
}

let buttonX = document.querySelectorAll(".btnX");
// console.log(buttonX)
let turnX = true;
buttonX.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnX){
            if(btn.innerText == 1){
                btn.innerText = GameArray[btn.innerText - 1];
                leftRotate();
            }
            else if(btn.innerText == 2){
                btn.innerText = GameArray[btn.innerText - 1];
                rightRotate();
            }
            else if(btn.innerText == 3){
                btn.innerText = GameArray[btn.innerText - 1];
                leftRotate();
            }
            turnX = false;
        }

    })
})



let buttonY = document.querySelectorAll(".btnY");
// console.log(buttonX)
let turnY = true;
buttonY.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnY){
            if(btn.innerText == 1){
                btn.innerText = GameArray[btn.innerText - 1];
                leftRotate();
            }
            else if(btn.innerText == 2){
                btn.innerText = GameArray[btn.innerText - 1];
                rightRotate();
            }
            else if(btn.innerText == 3){
                btn.innerText = GameArray[btn.innerText - 1];
                leftRotate();
            }
            turnY = false;
        }

    })
})


let resetButton = document.getElementById("resetbtn");
// console.log(resetButton);

let resetGame = () => {
    let index = 1;
    for(let btn of buttonX){
        btn.innerText = index;
        index++;
        turnX = true;
    }

    index = 1;

    for(let btn of buttonY){
        btn.innerText = index;
        index++;
        turnY = true;
    }
}

resetButton.addEventListener("click",resetGame);
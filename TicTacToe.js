let boxes = document.querySelectorAll(".box");

let turnO = true;
let gameover = false;

let xWin = 0;
let oWin = 0;

const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        matchPattern();
    });
});


const matchPattern = () => {
    for(let pattern of winningpattern){
        let firstPos = boxes[pattern[0]].innerText;
        let secondPos = boxes[pattern[1]].innerText;
        let thirdPos = boxes[pattern[2]].innerText;
        

        if(firstPos != "" && secondPos != "" && thirdPos != ""){
            if(firstPos === secondPos && secondPos === thirdPos){
                console.log("Winner",firstPos);
                gameover = true;
                disableAllBlock();

                if(firstPos === "X"){
                    xWin++;
                }
                else{
                    oWin++;
                }
                updateWinCount();
            }
        }
    }
}


let resetButton = document.querySelector(".reset-btn");

const reset = () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    gameover = false;
}

resetButton.addEventListener("click",reset);


const disableAllBlock = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const updateWinCount = () =>{
    document.querySelector(".xwin").innerHTML = "<b>xWin : </b>"+xWin;
    document.querySelector(".owin").innerHTML = "<b>oWin : </b>"+oWin;
}


let newButton = document.querySelector(".new-btn");

let newGame = () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    gameover = false;
    xWin = 0;
    oWin = 0;
    updateWinCount();
}

newButton.addEventListener("click",newGame);

/*
 * Copyright [2024] [Madhav Kumar]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
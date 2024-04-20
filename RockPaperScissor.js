let OriginalArray = ["Rock","Paper","Scissor"];

let numArray = [1,2,3];

let n = OriginalArray.length;


// function for left rotate : 
let leftRotate = () => {
    let first = OriginalArray[0];
    for(let i=0;i<n - 1;i++){
        OriginalArray[i] = OriginalArray[i+1];
    }
    OriginalArray[n - 1] = first;
}


// function for right rotate : 

let rightRotate = () => {
    let last = OriginalArray[n - 1];
    for(let i = n - 1;i > 0; i--){
        OriginalArray[i] = OriginalArray[i - 1];
    }
    OriginalArray[0] = last;
}


let buttonX = document.querySelectorAll(".btnX");

let TurnX = true;


buttonX.forEach((item) => {
    item.addEventListener("click",() => {
        if(TurnX){
            if(item.innerText == 1){
                item.innerText = OriginalArray[item.innerText - 1];
                leftRotate();
            }
            else if(item.innerText == 2){
                item.innerText = OriginalArray[item.innerText - 1];
                rightRotate();
            }
            else if(item.innerText == 3){
                item.innerText = OriginalArray[item.innerText - 1];
                leftRotate();
            }
            TurnX = false;
        }


    });
});

let buttonY = document.querySelectorAll(".btnY");

TurnY = true;
buttonY.forEach((item) => {
    item.addEventListener("click",() => {
        if(TurnY){
            if(item.innerText == 1){
                item.innerText = OriginalArray[item.innerText - 1];
                rightRotate();
            }
            else if(item.innerText == 2){
                item.innerText = OriginalArray[item.innerText - 1];
                leftRotate();
            }
            else if(item.innerText == 3){
                item.innerText = OriginalArray[item.innerText - 1];
                rightRotate();
            }
            TurnY = false;
        }

    });
});


let resetButton = document.querySelector(".resetGame");

let resetGame = () => {
    let index = 1;
    for(let box of buttonX){
        box.innerText = index;
        TurnX = true;
        index++;
    }
    index = 1;
    for(let box of buttonY){
        box.innerText = index;
        TurnY = true;
        index++;
    }
}

resetButton.addEventListener("click",resetGame);


let newButton = document.querySelector(".newGame");

let newGame = () => {
    let index = 1;
    for(let box of buttonX){
        box.innerText = index;
        TurnX = true;
        index++;
    }
    index = 1;
    for(let box of buttonY){
        box.innerText = index;
        TurnY = true;
        index++;
    }
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

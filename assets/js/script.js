document.addEventListener("DOMContentLoaded", function(){
    alert("You clicked submit button");

let buttons = document.getElementsByTagName(button);

for(let button of bottons){
    button.addEventListener("click",function(){
        for(let button of buttons){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit button");

            }else{
                let gameType = this.getAttribute("data-type");
                alert( `You clicked $(gameType) `);
            }

        }
    });

}
})
function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}
function displayDividQuestion() {
    
}
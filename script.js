let number = Math.floor(Math.random()*100) + 1;
let chances = 0;

function checkNum(){
    const userInput = parseInt(document.getElementById("inputNum").value);
    const message = document.getElementById("message");
    const chancesDisplay = document.getElementById("chance");

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
       message.textContent = "Please enter a valid number!";
       return; 
    }

    // chances++;

    if(userInput === number) {
        message.textContent = `Congratulations🎉!! You win the game...`;
        chancesDisplay.textContent = `You took ${chances} chances.`
    }else if (userInput < number){
        message.textContent = "You entered a smaller number! Try again."
    }else {
        message.textContent = "You entered a bigger number! Try again."
    }

}

function resetGame() {
    userInput = Math.floor(Math.random() * 100)+1;
    chances = chances+1;
    document.getElementById("inputNum").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("chance").textContent = "";
}
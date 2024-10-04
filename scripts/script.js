const girl = document.getElementById("girl");
const butterfly = document.getElementById("butterfly");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
let score = 0;

girl.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", null);
});

gameArea.addEventListener("dragover", (e) => {
    e.preventDefault();
});

gameArea.addEventListener("drop", (e) => {
    const mouseX = e.clientX - gameArea.getBoundingClientRect().left;
    const mouseY = e.clientY - gameArea.getBoundingClientRect().top;

    girl.style.left = mouseX - girl.clientWidth / 2 + "px";
    girl.style.top = mouseY - girl.clientHeight / 2 + "px";

    checkCollision();
});

function checkCollision() {
    const girlRect = girl.getBoundingClientRect();
    const butterflyRect = butterfly.getBoundingClientRect();

    if (
        girlRect.x < butterflyRect.x + butterflyRect.width &&
        girlRect.x + girlRect.width > butterflyRect.x &&
        girlRect.y < butterflyRect.y + butterflyRect.height &&
        girlRect.y + girlRect.height > butterflyRect.y
    ) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        resetGame();
    }
}

function resetGame() {
    girl.style.left = "0px";
    girl.style.top = "0px";
    // Reset butterfly position randomly if needed
    butterfly.style.left = Math.random() * (gameArea.clientWidth - butterfly.clientWidth) + "px";
    butterfly.style.top = Math.random() * (gameArea.clientHeight - butterfly.clientHeight) + "px";
}

document.getElementById("reset").addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = "Score: 0";
    resetGame();
});

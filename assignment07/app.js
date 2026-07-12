let lives = 3;
let inventory =[];
let gameState ="Start";

alert("Welcome! You are trapped inside a haunted house. You have 3 lives.");

while (lives > 0 && gameState!== "WIN" && gameState!== "LOSE") {

    if (gameState === "START") {
        let choice = prompt("Lives: " + lives + "\nChoose: Door 1, Door 2, Door 3");

        if (choice === "Door 1") {
            gameState = "DOOR1";
        }
        else if (choice === "Door 2") {
            gameState = "DOOR2";
        }
        else if (choice === "Door 3") {
            gameState = "DOOR3";
        }
        else {
            alert("Invalid choice. Try again.");
        }
    }

    else if (gameState === "DOOR1") {
        alert("You found an old key!");
        inventory.push("key");

        alert("Inventory:");
        for (let i = 0; i < inventory.length; i++) {
            alert("- " + inventory[i]);
        }

        gameState = "START";
    }

    else if (gameState === "DOOR2") {
        if (inventory.includes("key")) {
            alert("You used the key and escaped!");
            gameState = "WIN";
        }
        else {
            alert("Door is locked. Ghost scared you!");
            lives--;
            gameState = "START";
        }
    }

    else if (gameState === "DOOR3") {
        let action = prompt("Ghost attacks! Type FIGHT or RUN");

        if (action === "FIGHT" || action === "fight") {
            alert("You found a health potion!");
            lives++;
            gameState = "START";
        }
        else if (action === "RUN" || action === "run") {
            alert("Ghost scratched you!");
            lives--;
            gameState = "START";
        }
        else {
            alert("You froze! Lost a life.");
            lives--;
            gameState = "START";
        }
    }
}

if (gameState === "WIN") {
    alert("You Win! You escaped the haunted house.");
}
if (lives === 0) {
    gameState = "LOSE";
    alert("Game Over! You ran out of lives.");
}
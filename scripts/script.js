$(document).ready(function() {
    let score = 0;

    // Initialize the game piece as draggable
    $("#game-piece").draggable({
        revert: "invalid", // If not dropped in the target, revert to original position
        containment: "#game-area" // Keep the piece within the game area
    });

    // Make the target area droppable
    $(".target").droppable({
        accept: "#game-piece",
        drop: function(event, ui) {
            score++; // Increment score when the game piece is dropped in the target
            $("#score").text("Score: " + score); // Update the score display

            // Optionally, you can change the position of the target randomly
            let newLeft = Math.random() * ($("#game-area").width() - 50); // Random x position
            $(this).css("left", newLeft + "px"); // Update target position
        }
    });

    // Reset the game
    $("#reset").click(function() {
        score = 0; // Reset score
        $("#score").text("Score: " + score); // Update score display
        $("#game-piece").css({ top: 0, left: 0 }); // Reset position of the game piece
    });
});


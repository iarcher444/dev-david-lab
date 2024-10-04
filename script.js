$(document).ready(function() {
    let score = 0;

    // Makes game piece draggable
    $("#game-piece").draggable({
        revert: "invalid",
        containment: "#game-area"
    });

    // Makes the target area droppable
    $(".target").droppable({
        accept: "#game-piece",
        drop: function(event, ui) {
            score++;
            $("#score").text("Score: " + score); // Updates score

            
            let newLeft = Math.random() * ($("#game-area").width() - 100);
            $(this).css("left", newLeft + "px");
        }
    });

    // Reset the game
    $("#reset").click(function() {
        score = 0; // Reset score
        $("#score").text("Score: " + score);
        $("#game-piece").css({ top: 0, left: 0 });
    });
});

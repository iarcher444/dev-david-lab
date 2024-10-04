$(document).ready(function() {
    let score = 0;

    // makes game piece as draggable
    $("#game-piece").draggable({
        revert: "invalid", 
        containment: "#game-area" 
    });

    
    $(".target").droppable({
        accept: "#game-piece",
        drop: function(event, ui) {
            score++; 
            $("#score").text("Score: " + score); 

            
            let newLeft = Math.random() * ($("#game-area").width() - 100); 
            $(this).css("left", newLeft + "px"); 
        }
    });

    
    $("#reset").click(function() {
        score = 0; 
        $("#score").text("Score: " + score); 
        $("#game-piece").css({ top: 0, left: 0 });
    });
});
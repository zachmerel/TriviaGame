$(document).ready(function () {
    //Array of questions
    var questions = ["What address did Elwood Blues have on his Illinois driver's lisenese?",
        "Who was the villian in the film The Dark Knight?",
        "Which is not a place where Ferris and his friends visited while skipping school?",
        "Where do Wayne and Garth NOT 'travel' to on the blue screen?",
        "What is Will Smith's character's name in I, Robot?"];

    var randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    $(".show").hide();

    //Start Button
    $(".start-button").on("click", function () {
        //hides Start Button
        $(".start-button").hide();
        //Shows timer
        $(".show").show();
        //Timer counts down from 30 to 0 in increments of 1 second
        var timeleft = 30;
        var questionTimer = setInterval(function () {
            timeleft--;
            document.getElementById("countdowntimer").textContent = timeleft;
            if (timeleft <= 0)
                clearInterval(questionTimer);
        }, 1000);
        //Diplays a question
        $("#question").html(randomQuestion);
    });
});
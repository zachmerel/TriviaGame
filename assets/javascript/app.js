$(document).ready(function () {
    //Object of Questions with objects of each question inside
    var questions = [
        {
            answered: false,
            text: "What address did Elwood Blues have on his Illinois driver's lisenese?",
            correct: "1060 W Addison St",
            wrongOne: "233 S Wacker Dr",
            wrongTwo: "875 N Michigan Ave",
            wrongThree: "141 W Jackson Blvd",
            image: '<img src="https://media.giphy.com/media/CwMKejp4V6Z1K/giphy.gif"/>'
        },
        {
            answered: false,
            text: "Who was the main villian in the film The Dark Knight?",
            correct: "Joker",
            wrongOne: "Penguin",
            wrongTwo: "Bane",
            wrongThree: "Scarecrow",
            image: '<img src="https://media.giphy.com/media/KZd26L2o8QXtK/giphy.gif"/>'
        },
        {
            answered: false,
            text: "Which is not a place where Ferris and his friends visited while skipping school?",
            correct: "Nay Pier",
            wrongOne: "Wrigley Field",
            wrongTwo: "Von Steuben Day Parade",
            wrongThree: "Art Institute of Chicago",
            image: '<img src="https://media.giphy.com/media/3oEjI2hdCm6HODQsdq/giphy.giff"/>'
        },
        {
            answered: false,
            text: "Where do Wayne and Garth NOT 'travel' to on the blue screen?",
            correct: "Florida",
            wrongOne: "Hawaii",
            wrongTwo: "Tenxas",
            wrongThree: "New York",
            image: '<img src="https://media.giphy.com/media/cd87BccyY3Ecg/giphy.gif"/>'
        },
        {
            answered: false,
            text: "What is Will Smith's character's name in I, Robot?",
            correct: "Del Spooner",
            wrongOne: "Steven Hiller",
            wrongTwo: "Robert Neville",
            wrongThree: "Mike Lowrey",
            image: '<img src="https://media.giphy.com/media/xUOwVmpPRPlosLm5vG/giphy.gif"/>'
        }
    ]

    var correct;
    var incorrect;
    var unanswered;
    var currentQuestion;

    $(".timerText").hide();








    // function timer(){
    var number = 30;
    var intervalId;

    $(".start-button").on("click", function () {
        //   hides Start Button
        $(".start-button").hide();
        //Shows timer
        $(".timerText").show();
        timer();
        displayQuestions();

        // for (const key in questions) {
        // Q(questions[key]);
        // choiceClicks();
    




        // 
    });
function displayQuestions() {
    for ( var i = 0; i < questions.length; i++) {
        if(!questions[i].answered){
            $("#question").html(questions[i].text);
            $("#answerA").html(questions[i].correct);
            $("#answerB").html(questions[i].wrongOne);
            $("#answerC").html(questions[i].wrongThree);
            $("#answerD").html(questions[i].wrongTwo); 
        }
        questions[i].answered = true;
        console.log( questions[i].image );
        currentQuestion = questions[i];

                break;
    }
    choiceClicks();
}

    //Functions displays questions and choices
    function Q(obj) {
     
    }
    //function give clickability to choices
    function choiceClicks() {
        $("#answerA").on("click", function () {
            stopTimer();
            correct();
            hidesChoices();
            $('#gif').html(currentQuestion.image);
            
        });
        $("#answerB").on("click", function () {
            stopTimer();
            hidesChoices();
            nope();
            $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
            $('#gif').html(currentQuestion.image);
        });
        $("#answerC").on("click", function () {
            stopTimer();
            hidesChoices();
            nope();
            $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
            $('#gif').html(currentQuestion.image);
        });

        $("#answerD").on("click", function () {
            stopTimer();
            hidesChoices();
            nope();
            $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
            $('#gif').html(currentQuestion.image);
        });


    }
    //function runs timer
    function timer() {
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            number--;
            $("#countdowntimer").html(number);
            if (number === 0) {
                stopTimer();
                outOfTime();
                hidesChoices();
                $('#gif').html(currentQuestion.image);
            }
        }
        run();
    }

    //function stops timer
    function stopTimer() {
        clearInterval(intervalId);
    }


    //function that hides choices
    function hidesChoices() {
        $("#answerA").hide();
        $("#answerB").hide();
        $("#answerC").hide();
        $("#answerD").hide();
    }
    //function displays Nope if wrong anwser is selected
    function nope() {
        $("#question").html("Nope!");
    }
    function correct(){
        $("#question").html("Correct!");
    }
    function outOfTime(){
        $("#question").html("Out of Time!");
    }

});
$(document).ready(function () {
    //hides timer until action is taken
    $(".timerText").hide();
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
  
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var currentQuestion;
    var questionDuration = 30;
    var timeInBetweenDuration = 10;
    var intervalId;

//start button, starts off game
    $(".start-button-click").on("click", function () {
         console.log("func 1")
        //   hides Start Button
        $(".start-button").hide();
        //Shows timer
        $(".timerText").show();
        thirtySecondTimer();
        displayQuestions();
        console.log('correct:', correct)
        console.log('incorret:', incorrect)
        console.log('unanswered:', unanswered)
    });
 //function displays questions runs for loop as long as answered is false will run   
function displayQuestions() { console.log("func 2")
    for ( var i = 0; i < questions.length; i++) {
        if(!questions[i].answered){
            $("#question").html(questions[i].text);
            $("#answerA").html(questions[i].correct);
            $("#answerB").html(questions[i].wrongOne);
            $("#answerC").html(questions[i].wrongThree);
            $("#answerD").html(questions[i].wrongTwo); 
        }
        //changes answered property to true and stopes to
        questions[i].answered = true;
        currentQuestion = questions[i];
                break;
    }
    choiceClicks();
}
    //function give clickability to choices
    function choiceClicks() { console.log("func 3")
        $("#answerA").on("click", function () { console.log("func 4")
            correctChoice();
            console.log(incorrect)
        });
        $("#answerB").on("click", function () {
            nope();
            $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
            $('#gif').html(currentQuestion.image);
            console.log(incorrect)
        });
        $("#answerC").on("click", function () {
            nope();
            $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
            $('#gif').html(currentQuestion.image);
        });

        $("#answerD").on("click", function () {
            nope();
            
            $('#gif').html(currentQuestion.image);
        });


    }
    //function runs  questionDuration timer
    function thirtySecondTimer() {
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            questionDuration--;
            $("#countdowntimer").html(questionDuration);
            if (questionDuration === 0) {
                stopTimer();
                outOfTime();
                
                
            }
        }
        run();
    }

       //function runs  timeInBetweenDuration timer
       function timeInBetweenDurationTimer() {
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            timeInBetweenDuration--;
            $("#countdowntimer").html(timeInBetweenDuration);
            if (timeInBetweenDuration === 0) {
                stopTimer();
            }
        }
        run();
    }

    //function stops timer
    function stopTimer() { console.log("func 5")
        clearInterval(intervalId);
    }

    //function that hides choices
    function hidesChoices() {
        stopTimer();
        $("#answerA").hide();
        $("#answerB").hide();
        $("#answerC").hide();
        $("#answerD").hide();
    }
    //function displays Nope if wrong anwser is selected
    function nope() {
        hidesChoices();
        $("#question").html("Nope!");
        $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
        $('#gif').html(currentQuestion.image);
        incorrect++;
    }
    function correctChoice (){ console.log("func 6")
        hidesChoices();
        $("#question").html("Correct!");
        $('#gif').html(currentQuestion.image);
        correct++;
    }
    function outOfTime(){
        hidesChoices();
        $("#question").html("Out of Time!");
        $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
        $('#gif').html(currentQuestion.image);
        unanswered++;
    }

});
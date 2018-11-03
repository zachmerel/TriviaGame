$(document).ready(function () {
    //hides timer until action is taken
    $(".timerText").hide();
    //hides start over button until game is finished
    $(".start-over-button").hide();
    //Object of Questions with objects of each question inside
    var questions = [
        {
            answered: false,
            text: "What address did Elwood Blues have on his Illinois driver's lisenese?",
            potentialAnswers: [
                {text:"233 S Wacker Dr",
                isCorrect: false
                },
                {text:"1060 W Addison St",
                isCorrect: true
                },
                {text:"875 N Michigan Ave",
                isCorrect: false
                },
                {text:"141 W Jackson Blvd",
                isCorrect: false
                }
            ],
            image: '<img src="https://media.giphy.com/media/CwMKejp4V6Z1K/giphy.gif"/>'
        },
        {
            answered: false,
            text: "Who was the main villian in the film The Dark Knight?",
            potentialAnswers: [
                {text:"Penguin",
                isCorrect: false
                },
                {text:"Bane",
                isCorrect: false
                },
                {text:"Joker",
                isCorrect: true
                },
                {text:"Scarecrow",
                isCorrect: false
                }
            ],
            image: '<img src="https://media.giphy.com/media/KZd26L2o8QXtK/giphy.gif"/>'
        },
        {
            answered: false,
            text: "Which is not a place where Ferris and his friends visited while skipping school?",
            potentialAnswers: [
                {text:"Wrigley Field",
                isCorrect: false
                },
                {text:"Von Steuben Day Parade",
                isCorrect: false
                },
                {text:"Art Institute of Chicago",
                isCorrect: false
                },
                {text:"Navy Pier",
                isCorrect: true
                },
            ],
            image: '<img src="https://media.giphy.com/media/8FhXc8w45aN32/giphy.gif"/>'
        },
        {
            answered: false,
            text: "Where do Wayne and Garth NOT 'travel' to on the blue screen?",
            potentialAnswers: [
                {text:"Florida",
                isCorrect: true
                },
                {text:"Hawaii",
                isCorrect: false
                },
                {text:"Texas",
                isCorrect: false
                },
                {text:"New York",
                isCorrect: false
                }
            ],
            image: '<img src="https://media.giphy.com/media/cd87BccyY3Ecg/giphy.gif"/>'
        },
        {
            answered: false,
            text: "What is Will Smith's character's name in I, Robot?",
            potentialAnswers: [
                {text:"Steven Hiller",
                isCorrect: false
                },
                {text:"Robert Neville",
                isCorrect: false
                },
                {text:"Mike Lowrey",
                isCorrect: false
                },
                {text:"Del Spooner",
                isCorrect: true
                },
            ],
            image: '<img src="https://media.giphy.com/media/xUOwVmpPRPlosLm5vG/giphy.gif"/>'
        }
    ]
var results = {
    correct : 0,
    incorrect : 0,
    unanswered : 0,
}
    var currentQuestion;
    var questionDuration = 30;
    var timeInBetweenDuration = 5;
    var intervalId;
    //start button, starts off game
    $(".start-button-click").on("click", function () { console.log("func 1")
        //   hides Start Button
        $(".start-button").hide();
        //Shows timer
        $(".timerText").show();  
        displayQuestions();
    });
    //function displays questions runs for loop as long as answered is false will run   
    function displayQuestions() { console.log("func 2")
        for (var i = 0; i < questions.length; i++) {
            //displays results at end of quiz
            if(questions[i].answered && results.incorrect+results.correct+results.unanswered == questions.length){
                quizResults();
            }
            if (!questions[i].answered) {
                $("#question").html(questions[i].text);
                for(var j = 0;j<questions[i].potentialAnswers.length;j++){
                    var isCorrect = questions[i].potentialAnswers[j].isCorrect;
                    var text = questions[i].potentialAnswers[j].text;
                    var potentialAnswer = $(`<div class="col-md-3 text choice" data-correct="${isCorrect}">${text}</div>`)
                    $(".answers").append(potentialAnswer);
                } 
                questions[i].answered = true;
                currentQuestion = questions[i];
                console.log("currentQuestion:", currentQuestion);
                thirtySecondTimer();
                break;
            }
        }
    }
    $(document).on('click', '.choice', function(){ console.log("func 3")
        var isCorrect = $(this).attr("data-correct");
        if(isCorrect === 'true'){
            correctChoice();
        }
        else{
            nope();
        }
        console.log('correct:', results.correct)
        console.log('incorret:', results.incorrect)
        console.log('unanswered:', results.unanswered)
    })
    //function runs  questionDuration timer
    function thirtySecondTimer() { console.log("func 2.1")
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
    function fiveSecondTimer() {  console.log("func 7")
        function run() {
            timeInBetweenDuration = 5;
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            timeInBetweenDuration--;
            if (timeInBetweenDuration === 0) {
                stopTimer();
                nextQuestion();
                displayQuestions();
            }
        }
        run();
    }
    //function stops timer
    function stopTimer() {console.log("func 6")
        clearInterval(intervalId);
    }
    //function that hides choices
    function hidesChoices() {  console.log("func 5")
        stopTimer();
        $(".answers").empty();
    }
    //function displays Nope if wrong anwser is selected
    function nope() {
        hidesChoices();
        $("#question").html("Nope!");
        $("#correctAnswer").html("The correct answer was: " + currentQuestion.potentialAnswers
        .filter(val=>val.isCorrect)
        [0]
        .text);
        $('#gif').html(currentQuestion.image);
        fiveSecondTimer();
        results.incorrect++;
    }
    //function for correct answer choosen
    function correctChoice() {  
        hidesChoices();
        $("#question").html("Correct!");
        $('#gif').html(currentQuestion.image);
        fiveSecondTimer();
        results.correct++;
    }
    //function for when 30 second timer runs out
    function outOfTime() { console.log("func 4")
        hidesChoices();
        $("#question").html("Out of Time!");
        $("#correctAnswer").html("The correct answer was: " + currentQuestion.potentialAnswers
        .filter(val=>val.isCorrect)
        [0]
        .text);
        $('#gif').html(currentQuestion.image);
        results.unanswered++;
        fiveSecondTimer();
        console.log('unanswered:', results.unansweredunanswered)
    }
    //function to reset the quiz
    $(".start-over-button").click(function () { console.log('func 10')
        location.reload();
    });
    //function to display results of the quiz
    function quizResults(){ console.log('func 9')
        $("#question").html("All done, here's how you did!");
        $("#correct").html(`Correct: ${results.correct}`);
        $("#incorrect").html(`Incorrect: ${results.incorrect} `); 
        $("#unanswered").html(`Unanswered: ${results.unanswered}`);
        $(".start-over-button").show();
    }
    //function clears main container and should reset 30 second timer for next question (but doesn't right now)
    function nextQuestion() { console.log("func 8")
        $("#question").empty();
        $("#correctAnswer").empty();
        $('#gif').empty();
        questionDuration = 31;
    }
});
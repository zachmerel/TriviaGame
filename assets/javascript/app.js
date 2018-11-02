$(document).ready(function () {
    //hides timer until action is taken
    $(".timerText").hide();
    //Object of Questions with objects of each question inside
    var questions = [
        {
            answered: false,
            text: "What address did Elwood Blues have on his Illinois driver's lisenese?",
            potentialAnswers: [
                {text:"1060 W Addison St",
                isCorrect: true
                },
                {text:"233 S Wacker Dr",
                isCorrect: false
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
                {text:"Joker",
                isCorrect: true
                },
                {text:"Penguin",
                isCorrect: false
                },
                {text:"Bane",
                isCorrect: false
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
                {text:"Navy Pier",
                isCorrect: true
                },
                {text:"Wrigley Field",
                isCorrect: false
                },
                {text:"Von Steuben Day Parade",
                isCorrect: false
                },
                {text:"Art Institute of Chicago",
                isCorrect: false
                }
            ],
            image: '<img src="https://media.giphy.com/media/3oEjI2hdCm6HODQsdq/giphy.giff"/>'
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
                {text:"Del Spooner",
                isCorrect: true
                },
                {text:"Steven Hiller",
                isCorrect: false
                },
                {text:"Robert Neville",
                isCorrect: false
                },
                {text:"Mike Lowrey",
                isCorrect: false
                }
            ],
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
    $(".start-button-click").on("click", function () { console.log("func 1")
        //   hides Start Button
        $(".start-button").hide();
        //Shows timer
        $(".timerText").show();
        thirtySecondTimer();
        displayQuestions();
       
    });
    //function displays questions runs for loop as long as answered is false will run   
    function displayQuestions() { console.log("func 2")
        for (var i = 0; i < questions.length; i++) {
            if (!questions[i].answered) {
                $("#question").html(questions[i].text);
                for(var j = 0;j<questions[i].potentialAnswers.length;j++){
                    var isCorrect = questions[i].potentialAnswers[j].isCorrect;
                    var text = questions[i].potentialAnswers[j].text;
                    var potentialAnswer = $(`<div class="col-md-3 text choice" data-correct="${isCorrect}">${text}</div>`)
                    $(".answers").append(potentialAnswer);
                } 
                questions[i].answered = true;
            }
            //changes answered property to true and stopes to
            
            currentQuestion = questions[i];
            console.log("currentQuestion:", currentQuestion);
            break;
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
        console.log('correct:', correct)
        console.log('incorret:', incorrect)
        console.log('unanswered:', unanswered)
    })

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
    function tenSecondTimer() {  console.log("func 7")
        function run() {
            timeInBetweenDuration = 10;
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
        $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
        $('#gif').html(currentQuestion.image);
        tenSecondTimer();
        incorrect++;
    }
    function correctChoice() {  console.log("func 4")
        hidesChoices();
        $("#question").html("Correct!");
        $('#gif').html(currentQuestion.image);
        tenSecondTimer();
        correct++;
    }
    function outOfTime() {
        hidesChoices();
        $("#question").html("Out of Time!");
        $("#correctAnswer").html("The correct answer was: " + currentQuestion.correct);
        $('#gif').html(currentQuestion.image);
        unanswered++;
        console.log('unanswered:', unanswered)
    }

    function nextQuestion() { console.log("func 8")
        $("#question").empty();
        $("#correctAnswer").empty();
        $('#gif').empty();
        questionDuration = 30;
    }

});
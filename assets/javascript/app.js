$(document).ready(function () {
    //Object of Questions with objects of each question inside
    var questions = {
        questionOne : {
            text: "What address did Elwood Blues have on his Illinois driver's lisenese?",
            correct: "1060 W Addison St",
            wrongOne: "233 S Wacker Dr",
            wrongTwo: "875 N Michigan Ave",
            wrongThree: "141 W Jackson Blvd"
        },
        questionTwo : {
            text: "Who was the main villian in the film The Dark Knight?",
            correct: "Joker",
            wrongOne: "Penguin",
            wrongTwo: "Bane",
            wrongThree: "Scarecrow"
        },
        questionThree : {
            text: "Which is not a place where Ferris and his friends visited while skipping school?",
            correct: "Nay Pier",
            wrongOne: "Wrigley Field",
            wrongTwo: "Von Steuben Day Parade",
            wrongThree: "Chicago Board of Trade"
        },
        questionFour : {
            text: "Where do Wayne and Garth NOT 'travel' to on the blue screen?",
            correct: "Florida",
            wrongOne: "Hawaii",
            wrongTwo: "Tenxas",
            wrongThree: "New York"
        },
        questionFive : {
            text: "What is Will Smith's character's name in I, Robot?",
            correct: "Del Spooner",
            wrongOne: "Steven Hiller",
            wrongTwo: "Robert Neville",
            wrongThree: "Mike Lowrey"
        }
    }

    $(".timerText").hide();




    // //Start Button
    // $(".start-button").on("click", function () {
    //     //hides Start Button
    //     $(".start-button").hide();
    //     //Shows timer
    //     $(".timerText").show();
    //     //Timer counts down from 30 to 0 in increments of 1 second
    //     var timeleft = 30;
    //     var questionTimer = setInterval(function () {
    //         timeleft--;
    //         document.getElementById("countdowntimer").textContent = timeleft;
    //         if (timeleft == 0) {
    //             $("#question").html("Out of Time!")
    //             hidesChoices();
    //         }
    //         if (timeleft <= 0)
    //             clearInterval(questionTimer);
    //     }, 1000);


    //     //Diplays a question
    //     Question1();
    //     blueBrotherAnswers();




    // });
    $(".start-button").on("click", function () {
        //   hides Start Button
        $(".start-button").hide();
        //Shows timer
        $(".timerText").show();
        var timeleft = 30;
        var questionTimer = setInterval(function () {
            timeleft--;
            document.getElementById("countdowntimer").textContent = timeleft;
            if (timeleft <= 0)
                clearInterval(questionTimer);
        }, 1000);
        //look at week 5 interval & stopwatch 
    for (const key in questions) {
        Q(questions[key])
        if(timeleft == 0){
            alert("you lose");
        }
    

        //user ansers
        //display to the user quesionz[key].correct
    }
});


    function Q(obj) {
        $("#question").html(obj.text);
        $("#answerA").html(obj.correct);
        $("#answerB").html(obj.wrongOne);
        $("#answerC").html(obj.wrongThree);
        $("#answerD").html(obj.wrongTwo);
        $("#answerA").on("click", function(){
            console.log("clickworks")
        });
        $("#answerB").on("click", function(){
            console.log("clickworks")
        });
        $("#answerC").on("click", function(){
            console.log("clickworks")
        });

        $("#answerD").on("click", function(){
            console.log("clickworks")
        });
        
        
    }




    // //functino that displays question 1
    // function Question1() {
    //     $("#question").html(questions[0]);
    //     $("#answerA").html(bluesBrothersOptions[0]);
    //     $("#answerB").html(bluesBrothersOptions[1]);
    //     $("#answerC").html(bluesBrothersOptions[2]);
    //     $("#answerD").html(bluesBrothersOptions[3]);
    // }

    //function that hides choices
    function hidesChoices() {
        $("#answerA").hide();
        $("#answerB").hide();
        $("#answerC").hide();
        $("#answerD").hide();
    }

    // function blueBrotherAnswers() {
    //     $("#answerA").on("click", function () {
    //         hidesChoices();
    //         $("#question").html("Nope!")
    //         $("#correctAnswer").html("The correct answer was: " + bluesBrothersOptions[3]);

    //     });
    // }

});
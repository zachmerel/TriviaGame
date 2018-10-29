$(document).ready(function () {

    var timeleft = 30;
    var questionTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(questionTimer);
    },1000);

    $(".start-button").on("click", function () {
        $(".start-button" ).hide();
    });
});
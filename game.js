var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
var started;

if(started===false)
{
    $(document).on("keydown",nextSequence);
    started=true;
}
alert(started);


function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // audio addition for specific button

    playSound(randomChosenColour);
    level++;
    $("h1").text("level "+level);
}

// storage of user pattern
$(".btn").on("click",handler);
   
function handler(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
}

// Function for playing sound

function playSound(colourSound){
    var audio= new Audio("sounds/"+colourSound+".mp3");
    audio.play();
}

// Function for animation

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)

}




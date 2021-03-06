var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
//Create a new variable called level and start at level 0.
var level=0;
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started=false;
// variable needed to check whether the userpattern and gamepattern is similar or not
var currentLevel=0;

$(document).on("keydown",function(){

    if(!started)
    {
        $("#level-title").text("level "+level);
        nextSequence();
        started=true;
    }
    
});
    
// storage of user pattern
$(".btn").on("click",function(){

    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer();
    
});

function checkAnswer(){

    // var index=buttonColours.indexOf(currentLevel);


    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        
        if(currentLevel<gamePattern.length-1){
            currentLevel++;    
        }
        else{
            userClickedPattern.length=0;
            setTimeout(nextSequence,1000);
            currentLevel=0;
        }
        
    }
    else{
        
        playSound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");  
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        // when the user loses the game starts again newly
        startOver();
        
    }


}

function startOver(){
    gamePattern.length=0;
    userClickedPattern.length=0;
    started=false;
    level=0;
    currentLevel=0;
}
function nextSequence(){
    // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;
    // Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
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
    },100);

}




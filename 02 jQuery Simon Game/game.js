var randomOrder = [];
var playerOrder = [];

var counter = 0;
var level = 1;
var started = false;

//Press Animation/Compare pressed button to Array elements
$(".btn").on("click", function () {
  buttonAnimation(this.id);
  playSound(this.id);
  playerOrder.push(this.id);
  if (playerOrder[counter] === randomOrder[counter]) {
    counter++;
  }
  else { gameOver(); }
  if (counter === level) {
    level ++;
    nextLevel(this.id);
  }
});

$(document).on("keypress", function(event){
  if (!started) {
    nextLevel(event.key);
    started = true;
  }
});

//Increment level by 1/ Generate random button press/Add it to Array.
function nextLevel(buttonColor) {
  counter = 0;
  playerOrder = [];
  $("h1").text("Level " + level);
  var randomNumber = Math.round(Math.random()*3);
  var randomButtonColor = $(".btn").get(randomNumber).id;
  //var randButt = "#" +  randButton;
  playSound(randomButtonColor);
  setTimeout(function() {
    $("#" + randomButtonColor).css("visibility", "hidden");
  }, 400);
  setTimeout(function () {
    $("#" + randomButtonColor).css("visibility", "visible");
  }, 600);
  randomOrder.push(randomButtonColor);
  console.log(randomOrder);
}

function gameOver () {
  playSound("wrong");
  $("body").addClass("game-over");
  $("h1").text("Game Over, Press Any Key to Restart");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
  resetValues();
}

function playSound(sound) {
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}

function buttonAnimation(buttonColor) {
  $("#" + buttonColor).addClass("pressed");
  setTimeout(function () {
    $("#" + buttonColor).removeClass("pressed");
  }, 100);
}

function resetValues() {
  level = 1;
  randomOrder = [];
  started = false;
}

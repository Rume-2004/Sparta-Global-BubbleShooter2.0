$(document).ready(function(){

// // console.log("Hi it's working");
// var randomNum = Math.floor(Math.random()*2)+1;
// console.log(randomNum);

var mapArray = [
  [1,1,1,4,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,2,4,2,2,2,2,2,4,2,2,2],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [1,1,1,1,1,1,4,1,1,1,1,1,1,1],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];
// blue = 1
// green = 2
// Clear = 3
// bomb = 4

for (var y = 0; y < mapArray.length; y++) {
  for (var x = 0; x < mapArray[y].length; x++)
   {
    console.log(y,x);
    if(mapArray[y][x] == 1){
      $("#board").append("<div class='blue'></div>");
      console.log("blue");
    } else if (mapArray[y][x] == 2) {
      $("#board").append("<div class='green'></div>");
      console.log("green");
    }else if(mapArray[y][x] == 3){
      $("#board").append("<div class='clear'></div>");
      console.log('clear');
    }else if(mapArray[y][x] == 4){
       $("#board").append("<div class='Bomb'></div>");
       console.log('Bomb');
  }
}
}
var score = 0;
var time = 20;

setInterval(function(){
  if (time != 0 ) {
    time--;
      $(".timer").html("time: " + time)
    } else {
      document.location = "../game_over.html"
    }},1000);

$('.blue').click(function(){
    score = score + 10;
    $(".scoreboard").html("score"+ score);
$(this).removeClass('blue');
$(this).addClass('clear');
});

$('.green').click(function(){
  score = score + 20;
    $(".scoreboard").html("score"+ score)
  $(this).removeClass('green');
  $(this).addClass('clear');
});

$('.Bomb').click(function(){
  score = score - 20;
    $(".scoreboard").html("score"+ score)
  $(this).removeClass('green');
  $(this).addClass('clear');
});



});
 //end of the jquery which is at the top

$(document).ready(function(){

// console.log("Hi it's working");
var randomNum = Math.floor(Math.random()*2)+1;
console.log(randomNum);

// var mapArray = var randomMap
//
// var randomMap = Math.floor(Math.random()*14)+1;
// console.log(randomMap);

var mapArray = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,randomNum,3,3,3,3,3,3,3]
];
// blue = 1
// green = 2
// Clear = 3

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
     }
  }
}

$('.blue').click(function(){
$(this).removeClass('blue');
$(this).addClass('clear')
})

$('.green').click(function(){
  $(this).removeClass('green');
  $(this).addClass('clear')
})
// document.getElementsByClassName('blue').onclick = function() {myFunction()};

// function myFunction(){
//   document.getElementsByClassName('blue').
// }

})

//to create bubbles

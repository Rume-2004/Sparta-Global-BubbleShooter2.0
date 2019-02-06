console.log("Hi it's working");
var randomNum = Math.floor(Math.random()*2)+1;
console.log(randomNum);

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
//arrow = 4
var green = document.getElementsByClassName('green')
var clear = document.getElementsByClassName('clear')


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
      console.log(clear);

      
     }//else if (mapArray[10][6] == 2){
    //   $("#board").append("<div class='green'></div>");
    //   console.log('green');
    // }
    //   else if (mapArray[10][6] == 1 ) {
    //     $("#board").append("<div class='blue'></div>");
    //   console.log('blue');
    // }
  }
}




//to create bubbles
// for (var i = 6; i > 0; i--) {
//   $(".arrow").append("<img src=images/arrow-image.png alt=arrow>")
// }
// function leftArrow() {
//   leftKey = input.Keyboard.addKey(LEFT)
// }
//
// function rightArrow() {
//   rightKey = input.Keyboard.addKey(RIGHT)
// }

// for (var i = 6; i > 0; i--) {
// }
// var mapArray = setInterval(arrow, 10000);
//
// function mapArray() {
//   var i = 6 == (mapArray[y][x] == 4)
//   document.image = arrow
// }

  //--ar i = 0;
  // var images = [];
  // var time = 3000;
  //
  // images[0] = 'images/arrow-image.png';
  //
  // function changePosition() {
  //   document.arrow.src = images[i];
  //
  //   if(i > images.length - 1){
  //     i--;
  //   }else{
  //     i=0;
  //   }
  //   setTimeout('changePosition()', time);
  // }
  //
  // window.offload = changePosition;

// var myVar = setInterval(myArrow,3000);
//
// function myArrow() {
//   var direction = new myArrow();
//   document.getElementsByClassName('arrow').innerHTML
// }

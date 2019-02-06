console.log("Hi it's working");

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
  [3,3,3,3,3,3,4,3,3,3,3,3,3,3]
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
    }else if (mapArray[y][x] == 4) {
      $("#board").append("<img src=images/arrow-image.png alt=arrow>");
    }
  }
}
//to create bubbles
for (var i = 0; i > 0; i--) {
  $(".arrow").append("<img src=images/arrow-image.png alt=arrow>")
}



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





// this.getAngle = function(){
//   var angle = Math.atan2(this.y, this.x);   //radians
//   // you need to devide by PI, and MULTIPLY by 180:
//   var degrees = 180*angle/Math.PI;  //degrees
//   return (360+Math.round(degrees))%360; //round number, avoid decimal fragments

// var mapArray1 = [
//   [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//   [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
//   [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//   [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
//   [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//   [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
//   [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
//   [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
//   [3,3,3,3,3,3,3,3,3,3,3,3,3,3],
//   [3,3,3,3,3,3,4,3,3,3,3,3,3,3],
//   [3,3,3,3,3,3,3,3,3,3,3,3,3,3]
// ];
// set setInterval(function () {
//
// }, 10000);

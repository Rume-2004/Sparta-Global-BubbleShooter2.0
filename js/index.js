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
  for (var x = 0; x < mapArray[y].length; x++) {
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



// var arrowArray =[
//   [arrow1,arrow2,arrow3,arrow4, arrow5]]
//
// var vectorArrow = document.getElementById('arrow1')
// var vectorArrow = document.;



// this.getAngle = function(){
//   var angle = Math.atan2(this.y, this.x);   //radians
//   // you need to devide by PI, and MULTIPLY by 180:
//   var degrees = 180*angle/Math.PI;  //degrees
//   return (360+Math.round(degrees))%360; //round number, avoid decimal fragments

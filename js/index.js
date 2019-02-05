console.log("Hi it's working");

// var bubbles = new Array(2);
// bubbles[0] = new Light_Blue_Ball;
// bubbles[0].src = "images/Blue-Ball.png";
// bubbles[1] = new Green_Ball;
// bubbles[1].src = "images/green-ball.png";
//
// for (var i = 0; i < bubbles.length; i++) {
//   var bubbles = Math.random(0, bubbles.length);
//   bubbles[i]
// }

// [{, },{,}];"Green";"Lightblue";

// function bubbles()
// {
//   var bubbles = document.getElementById("board");
//
//   for (var i = 0; i < bubbles.length; i++)
//   {
//     if(bubbles[0] == img)
//     {
//       if(0 == bubbles.length)
//       {
//         var bubbles = 0;
//         document.getElementById("board").src = bubbles[0];
//         break;
//       }
//       else
//       var bubbles = 0 + 1
//       document.getElementById("board").src = bubbles[0];
//       break;
//     }
//
//   }
//
// }
// var balls = getRandomItem(bubbles);

var mapArray = [
  [1.2,1,2,1.2,1,2,1.2,1,2,1.2,1,2,1.2,1,2],
  [2,1,2,1,1,1,2,2,1,1,1,2,1,2,1,1,2,2,1,2],
  [1.2,1,2,1.2,1,2,1.2,1,2,1.2,1,2,1.2,1,2],
  [2,1,2,1,1,1,2,2,1,1,1,2,1,2,1,1,2,2,1,2],
  [1.2,1,2,1.2,1,2,1.2,1,2,1.2,1,2,1.2,1,2]
];
// blue = 1
// green = 2
var green = document.getElementsByClassName('green')

for (var y = 0; y < mapArray.length; y++) {
  for (var x = 0; x < mapArray[y].length; x++) {
    console.log(y,x);
    if(mapArray[y][x] == 1){
      $("#board").append("<div class='blue'></div>");
       console.log("blue");
    } else if (mapArray[y][x] == 2) {
        $("#board").append("<div class='green'></div>");
        console.log("green");
    }
    }
  }

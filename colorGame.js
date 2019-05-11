var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //Add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //Compare color to pickedColor
    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
      messageDisplay.textContent = "Correct!";
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []; 
  //Repeat num times
  for (let i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //Return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random()*256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random()*256); 
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}


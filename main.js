//Basic Wall Collide

//Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let rectX = 475;
let rectY = 175;
let rect2X = 0;
let rect2Y = 170;
let size = 75;

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  if (rect2X > rectX && rect2Y == rectY) {
    rect2X = 0;
    rect2Y = 170;
  }

  //Draw a Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a blue and a green square
  ctx.fillStyle = "grey";
  ctx.fillRect(rectX, rectY, rectSize, rectSize);

  ctx.fillStyle = "blue";
  ctx.fillRect(rect2X, rect2Y, rectSize, rectSize);

  requestAnimationFrame(loop);
}

// Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.code == "ArrowUp") {
    rect2X--;
  } else if (event.code == "ArrowDown") {
    rect2Y++;
  } else if (event.code == "ArrowRight") {
    rect2X++;
  } else if (event.code == "ArrowLeft") {
    rect2X--;
  }
}

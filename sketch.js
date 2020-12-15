let roll1=1;
let roll2=2;
let counter=0;
let endGame;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  endGame=false;
  background(220);
}

function draw() {
  dice(width/2 -100, height/2,roll1)
  dice(width/2 +100, height/2,roll2)

  
/* Logic  of the game */
  if(roll1==roll2)
  {
    text("YOU DID IT!",80,100);
    counter=0;
    endGame=true;
  }else{
    textAlign(CENTER)
    text("COUNTER = "+counter,300,400);
    text("CLICK ANYWHERE TO ROLL THE DICE",300,200);
    endGame=false;
  }
}
/* Dice */
function dice(diceX, diceY,roll) {
  textSize(18)
  if (roll==1) {
    fill(0, 168, 168)
    rect(diceX, diceY, 50, 50, 10)
    fill(255)
    rect(diceX - 1, diceY - 4, 50, 50, 10)
    stroke(0)
    fill(255, 0, 0)
    text("1", diceX - 4, diceY + 5)
  }
  if (roll==2) {
    fill(0, 168, 168)
    rect(diceX, diceY, 50, 50, 10)
    fill(255)
    rect(diceX - 1, diceY - 4, 50, 50, 10)
    stroke(0)
    fill(255, 0, 0)
    text("2", diceX - 4, diceY + 5)
  }
  if (roll==3) {
    fill(0, 168, 168)
    rect(diceX, diceY, 50, 50, 10)
    fill(255)
    rect(diceX - 1, diceY - 4, 50, 50, 10)
    stroke(0)
    fill(255, 0, 0)
    text("3", diceX - 4, diceY + 5)
  }
  if (roll==4) {
    fill(0, 168, 168)
    rect(diceX, diceY, 50, 50, 10)
    fill(255)
    rect(diceX - 1, diceY - 4, 50, 50, 10)
    stroke(0)
    fill(255, 0, 0)
    text("4", diceX - 4, diceY + 5)
  }
  if (roll==5) {
    fill(0, 168, 168)
    rect(diceX, diceY, 50, 50, 10)
    fill(255)
    rect(diceX - 1, diceY - 4, 50, 50, 10)
    stroke(0)
    fill(255, 0, 0)
    text("5", diceX - 4, diceY + 5)
  }
  if (roll==6) {
    fill(0, 168, 168)
    rect(diceX, diceY, 50, 50, 10)
    fill(255)
    rect(diceX - 1, diceY - 4, 50, 50, 10)
    stroke(0)
    fill(255, 0, 0)
    text("6", diceX - 4, diceY + 5)
  }  
}
/* Dice rolling logic */
function mouseReleased()
{
  roll1=int(random(1,7))
  roll2=int(random(1,7))
  background(random(255), random(255), random(255));
  
}
/* Counter  */
function mouseClicked()
{
  counter+=1
}



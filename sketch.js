
let FoxX, FoxY, FoxR;         // the fox's center and radius
let HenX, HenY, HenR;         // the hen's center and radius
let FoxColor, HenColor;       // animal colors
let FoxVisible, HenVisible;   // are we drawing these?
let FoxSpeed;                 // the fox's speed, from 0 to 1
let BGcolor;                  // the background color
let ClearBG;                  // clear the background on each frame?
let ScaleRadius;              // scale the fox's radius with distance?

function setup() {

  createCanvas(600, 500);

  HenX = width / 2.0;
  HenY = width / 2.0;
  HenR = 20;

  BGcolor = color(20, 95, 50);
  HenVisible = true
  background(BGcolor);
  HenColor = color(210, 210, 195);

}



function draw() {

  fill(HenColor);
  if (HenVisible) ellipse(HenX, HenY, 2*HenR, 2*HenR);
}
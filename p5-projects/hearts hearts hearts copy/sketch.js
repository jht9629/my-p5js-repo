let a_images = [];
let a_vid;
let b_vid = [];
let w = 2560;
let h = 1600;
let vw = 165;
let vh = 127;

function preload() {
  a_images[0] = loadImage("images/frame2.png");
  // a_images[1] = loadImage("images/gr-splat.jpg");
  // a_images[2] = loadImage("images/re-face.jpg");
  // a_images[3] = loadImage("images/olaf.jpg");
}

function setup() {
  createCanvas(500, 800);
  a_vid = createCapture(VIDEO);
  a_vid.size(w/5, h/5);
  //a_vid.hide(); // hide it

  // Needed for retina 2x displays
  pixelDensity(1);
}

function draw() {
  //background('#8AC4CE');
  //rect(19,155,462,464);
  image(a_images[0], 0, 0, 500, 800);
  //tint(255);  // White
  //image(a_vid, 3, 140, 156, 116)
  
  for (let k = 0; k < 12;k++){
    b_vid[k] = a_vid;
  }
  
  k = 0
  
  for (let i = 0;i < 3;i++){
    for (let j = 0; j < 4; j++){
      image(b_vid[k], 3 + 165 * i, 140 + 127 * j, 165, 127);
      k++;
      //print(k);
    }
  }
  
  
   // Prepare canvas pixels
  loadPixels();
  
  a_vid.loadPixels();

}
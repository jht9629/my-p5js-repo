let a_images = [];
let a_vid;
let b_vid = [];
let w = 2560;
let h = 1600;
let vw = 165;
let vh = 127;

function preload() {
  a_images[0] = loadImage("images/one.png");
  // a_images[1] = loadImage("images/gr-splat.jpg");
  // a_images[2] = loadImage("images/re-face.jpg");
  // a_images[3] = loadImage("images/olaf.jpg");
}

function setup() {
  createCanvas(500, 800);
  // a_vid = createCapture(VIDEO);
  // a_vid.size(w/5, h/5);
  //a_vid.hide(); // hide it

  // Needed for retina 2x displays
  pixelDensity(1);
}

function draw() {
  background(200)
  
  if (mouseIsPressed) {
    image(a_images[0], 0, 0, 500, 800);
  }

  let x = mouseX;
  let y = mouseY;
  // get(x, y, w, h)
  let subset = a_images[0].get(x, y, 200, 200);

  // image(img, x, y, [width], [height])

  // load webcam pixels 
  subset.loadPixels();
  for (let y = 0; y < subset.height; y += 1) {
    for (let x = 0; x < subset.width; x += 1) {
      let ii = (subset.width * y + x) * 4;

      // get r,g,b values from webcam pixel array
      let r = subset.pixels[ii + 0];
      let g = subset.pixels[ii + 1];
      let b = subset.pixels[ii + 2];

      // get average brightness 
      let br = (r + b + g) / 3;
      if (br < 200) {
        // Make gray
        subset.pixels[ii + 0] = br;
        subset.pixels[ii + 1] = br;
        subset.pixels[ii + 2] = br;
      }
      else {
        subset.pixels[ii+3] = 0;
      }
    }
  }
  subset.updatePixels();

  image(subset, x, y);

  // image(img, dx, dy, dWidth, dHeight, 
  //      sx, sy, [sWidth], [sHeight])

  loadPixels();
}
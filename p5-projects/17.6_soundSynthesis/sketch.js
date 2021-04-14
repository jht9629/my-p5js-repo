var wave;

var button;
var slider;
var playing = false;

function setup() {
  createCanvas(100, 100);

  slider = createSlider(100, 1200, 440);

  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
  wave.freq(440);
  wave.amp(0);

  button = createButton('play/pause');
  button.mousePressed(toggle);
}

function draw() {
  wave.freq(slider.value());
  if (playing) {
    background(255, 0, 255);
  } else {
    background(51);
  }
}

function toggle() {
  if (!playing) {
    // amp(vol, [rampTime], [timeFromNow])
    wave.amp(0.5, 1);
    playing = true;
  } else {
    wave.amp(0, 1);
    playing = false;
  }
}

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Bk8rLzzSink

// https://github.com/CodingTrain/website/blob/main/
//  Tutorials/P5JS/p5.js_sound/
//  17.6_soundSynthesis/sketch.js

// https://p5js.org/reference/#/p5.Oscillator
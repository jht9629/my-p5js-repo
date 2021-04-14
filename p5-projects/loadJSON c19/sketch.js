function setup() {
  noLoop();
  let url =
   'https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/world/c_meta.json';
  loadJSON(url, got_data);
}

function draw() {
  background(200);
}

function got_data(data) {
  print('data', data);
}

// https://p5js.org/reference/#/p5/loadJSON

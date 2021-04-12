const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

require('dotenv').config();

// console.log('process.env', process.env);

const user_name = process.env.USER_NAME || 'jht1493';
console.log('user_name', user_name);

const json_path = path.join(__dirname, '..', 'sketches.json');
const list_path = path.join(__dirname, '..', 'sketches.md');
const list_recent_path = path.join(__dirname, '..', 'sketches_recent.md');
const sketch_href = `https://editor.p5js.org/editor/${user_name}/projects`;

let href_read = 1;
let sks;

async function run() {
  if (!fs.pathExistsSync(json_path) || href_read) {
    await read_href(sketch_href, json_path);
  }
  sks = fs.readJsonSync(json_path);
  list_sketches(sks, list_path);
  // updatedAt
  sks.sort((item1, item2) => item1.updatedAt.localeCompare(item2.updatedAt));
  sks.reverse();
  list_sketches(sks, list_recent_path);
}

function list_sketches(sks, list_path) {
  // console.log('sks', sks);
  // console.log('sks.length', sks.length);
  let lines = [];
  lines.push('# Sketches for ' + user_name);
  lines.push([`${sks.length} sketches  `]);
  sks.forEach((item) => {
    // console.log(index, 'project.name', item.project.name);
    // console.log(index, 'projectId', item.projectId);
    let name = item.name;
    let id = item.id;
    let updatedAt = item.updatedAt;
    lines.push(
      `[${name}](https://editor.p5js.org/${user_name}/sketches/${id})<!-- ${updatedAt} -->  `
    );
  });
  fs.writeFileSync(list_path, lines.join('\n'));
}

async function read_href(sketch_href, json_path) {
  console.time('read_href');
  try {
    const response = await axios.get(sketch_href);
    const sks = response.data;
    console.log('read_href sks.length', sks.length);
    sks.sort((item1, item2) => item1.name.localeCompare(item2.name));
    fs.writeJsonSync(json_path, sks, { spaces: 2 });
  } catch (err) {
    console.log('read_href err', err);
  }
  console.timeEnd('read_href');
}

// console.log('run start');
run();
// console.log('run end');

//     "updatedAt": "2021-03-21T20:48:04.012Z",
// [Ex_05_99 Robot03_Response](https://editor.p5js.org/jht1493/sketches/sWEVGT4bm)

// https://github.com/jprichardson/node-fs-extra

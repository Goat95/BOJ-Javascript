let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let c = Number(input[1]);

const d = parseInt((a * 60 + b + c) / 60);
const e = parseInt((a * 60 + b + c) % 60);

if (d >= 24) {
  console.log(d - 24, e);
} else {
  console.log(d, e);
}

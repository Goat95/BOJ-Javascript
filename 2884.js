let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let H = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

if (M - 45 < 0) {
  M = 60 + (M - 45);
  H -= 1;

  if (H === -1) {
    H = 23;
  }
} else {
  M -= 45;
}

console.log(H + " " + M);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let A;
let B;

for (let i = 1; i <= a; i++) {
  A = Number(input[i].split(" ")[0]);
  B = Number(input[i].split(" ")[1]);
  console.log(`Case #${i}: ${A + B}`);
}

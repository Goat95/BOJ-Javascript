let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);

for (let i = 1; i <= a; i++) {
  console.log(" ".repeat(a - i) + "*".repeat(i));
}

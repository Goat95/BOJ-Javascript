let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let answer = "";

for (let i = a; i >= 1; i--) {
  answer += i + "\n";
}
console.log(answer);

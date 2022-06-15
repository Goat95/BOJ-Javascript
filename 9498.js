let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);

if (100 >= a && a >= 90) {
  console.log("A");
} else if (89 >= a && a >= 80) {
  console.log("B");
} else if (79 >= a && a >= 70) {
  console.log("C");
} else if (69 >= a && a >= 60) {
  console.log("D");
} else {
  console.log("F");
}

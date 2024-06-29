let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map((el) => el.split(" ").map((el) => Number(el)));

let grade = input.map((el) => el.reduce((past, curr) => past + curr, 0));

grade.forEach((el, idx) => {
	if (el === Math.max(...grade)) console.log(`${idx + 1} ${el}`);
})
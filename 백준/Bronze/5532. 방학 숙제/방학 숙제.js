let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map((el) => Number(el));

while (true) {
	input[0]--;
	input[1] -= input[3];
	input[2] -= input[4];
	if (input[1] <= 0 && input[2] <= 0) break;
}
	
console.log(input[0]);
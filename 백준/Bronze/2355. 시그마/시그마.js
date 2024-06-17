const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let sum = 0;
rl.on("line", function (line) {
	input = line
		.toString()
		.split(" ")
		.map((el) => Number(el));
}).on("close", function () {
	if (input[0] > input[1]) {
		sum = ((input[0] - input[1] + 1) * (input[0] + input[1])) / 2;
	} else {
		sum = ((input[1] - input[0] + 1) * (input[0] + input[1])) / 2;
	}
	console.log(sum);
	process.exit();
});
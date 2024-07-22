let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(' ').map(el => el.split(''));
let result = 0;

for (let i = 0; i < input[0].length; i++) {
	for (let j = 0; j < input[1].length; j++) {
		result += (+input[0][i]) * (+input[1][j]);
	}
}

console.log(result);
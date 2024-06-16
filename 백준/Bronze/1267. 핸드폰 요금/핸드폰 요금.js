let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let call = input[1].split(" ").map((el) => Number(el));
let m = 0;
let y = 0;

for (let i = 0; i < call.length; i++) {
	y += call[i] % 30 === 0 ? (call[i] / 30 + 1) * 10 : Math.ceil(call[i] / 30) * 10;
	m += call[i] % 60 === 0 ? (call[i] / 60 + 1) * 15 : Math.ceil(call[i] / 60) * 15;
}

if (m === y) console.log("Y M " + m);
else if (m > y) console.log("Y " + y);
else console.log("M " + m);
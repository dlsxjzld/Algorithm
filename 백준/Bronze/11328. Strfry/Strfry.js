const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

input.shift();
const answer = input
	.map((v) => {
		v = v.split(' ');
		const [a, b] = v;
		const A = a.split('').sort().join('');
		const B = b.split('').sort().join('');
		if (A == B) return 'Possible';
		else return 'Impossible';
	})
	.join('\n');
console.log(answer);
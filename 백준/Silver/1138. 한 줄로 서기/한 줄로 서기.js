let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
let list = input.shift().split(' ').map(Number);
let people = [];
for(let i = N - 1; i>=0;i--)
    people = people.slice(0,list[i]).concat([i+1, ...people.slice(list[i])]);
console.log(people.join(' ').trim());
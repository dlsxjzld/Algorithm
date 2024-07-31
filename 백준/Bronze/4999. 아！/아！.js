const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = "";
if(input[0].includes(input[1])){
    result = "go"
} else{
    result = "no"
}

console.log(result);
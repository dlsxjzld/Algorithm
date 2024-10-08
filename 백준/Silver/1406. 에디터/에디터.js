const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const rightStack = [];
let l = input.splice(0, 1);
const str = l[0].split('');


const comand = Number(input[0])

for (let i = 1; i <=comand; i++){
    switch (input[i][0]) { 
        case 'L':
            if (str.length > 0) rightStack.push(str.pop()); 
            break;
        case 'D':
            if (rightStack.length > 0) str.push(rightStack.pop()); 
            break;
        case 'B':
            if (str.length > 0) {
                str.pop();
            }
            break;
        case 'P':
            str.push(input[i][2]);
            break;
    }

}
let answer = str.join('');
answer+=rightStack.reverse().join('');
console.log(answer);
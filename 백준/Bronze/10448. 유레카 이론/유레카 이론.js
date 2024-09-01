const [testCase, ...testCaseArr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for(let i = 0; i < testCase; i++) {
    console.log(findTriangularNum(testCaseArr[i]));
}

function findTriangularNum(num) {
    for(let i = 1; i < num-1; i++) {
        for(let j = 1; j < num-1; j++) {
            for(let k = 1; k < num-1; k++) {
                if(i+j+k === num && checkEureka(i) && checkEureka(j) && checkEureka(k)) return 1;
            }
        } 
    }
    return 0;
}
function checkEureka(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
        if(sum === num) return true;
    }
    
    return false;
}
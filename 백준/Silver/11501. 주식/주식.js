const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
main();

function main(){
    let answer ="";
    for(let i = 2; i < input.length; i += 2) {
        answer += calc(i) + "\n";
    }
    console.log(answer);
}

function calc(i){
    let stockFlow = input[i].trim().split(' ').map(e => parseInt(e));
    let profit = 0;
    let maxPrice = 0;
    for(let j = stockFlow.length - 1; j >= 0; j--) {
        if (stockFlow[j] >= maxPrice) {
            maxPrice = stockFlow[j];
        }
        profit += maxPrice - stockFlow[j];
    }
    return profit;
}
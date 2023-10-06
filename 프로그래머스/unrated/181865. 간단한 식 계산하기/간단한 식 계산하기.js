const plus= function(a,b){
    return a+b
}
const minus= function(a,b){
    return a-b
}
const multiply= function(a,b){
    return a*b
}
function solution(binomial) {
    var answer = 0;
    const op = {
        '+' : (a,b)=>(a+b),
        '-' : minus,
        '*' : multiply,
    }
    let [a,ops,b] = binomial.split(' ')
    
    answer = op[ops](Number(a),+b)
    
    return answer;
}
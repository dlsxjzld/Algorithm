function solution(order) {
    var answer = 0;
    order.forEach((v)=>answer += v.includes('cafelatte') ? 5000 : 4500)
    return answer;
}
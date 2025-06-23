function solution(s) {
    var answer = [];
    const position = {}
    
    for(let [idx,char] of s.split('').entries()){
        if(position[char] === undefined){
            position[char] = idx
            answer.push(-1)
        }else{
            answer.push(idx - position[char])
            position[char] = idx
        }
    }
    return answer;
}
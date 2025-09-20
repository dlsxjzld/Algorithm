const char_rule = [...'abcdefghijklmnopqrstuvwxzy0123456789-_.']
function solution(new_id) {
    let answer = new_id;
    
    // 1단계
    answer = answer.toLowerCase()
    
    // 2단계
    answer = answer.split('').filter((ans)=>char_rule.includes(ans)).join('')
    
    // 3단계
    while(answer.includes('..')){
        answer = answer.replace('..','.')
    }
    // 4단계
    if(answer[0] === '.') {
        answer = answer.slice(1)    
    }
    if(answer[answer.length-1] === '.'){
        answer = answer.slice(0,answer.length-1)
    }
    // 5단계
    if(answer.length === 0){
        answer = 'a'
    }
    // 6단계
    if(answer.length >=16){
        answer = answer.slice(0,15)
        if(answer[answer.length-1] === '.'){
            answer = answer.slice(0,answer.length-1)
        }
    }
    // 7단계
    if(answer.length<=2){
        while(answer.length != 3){
            answer += answer[answer.length-1]
        }
    }

    return answer;
}
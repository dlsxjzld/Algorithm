function solution(word) {
    var answer = 0;
    const letter = ['A','E','I','O','U']
    const words = [] // 사전에 들어갈 단어
    const dict = [] // 사전
    
    const backtracking = function(array){
        if(array.length <=5){
            // 길이가 5이하인 단어면 사전에 추가
            dict.push(array.join(''))
            for(let i=0;i<5;i++){
                // 알파벳이 중복으로 들어가도 되므로 
                // for문 i=0부터 다시 시작
                array.push(letter[i])
                backtracking(array)
                array.pop(letter[i])
            }
            
        }
        return
    }
    // 백트래킹 시작
    // 가지치기 조건 -> 길이가 5이하인 단어만 찾기
    
    for(let i=0;i<5;i++){
        words.push(letter[i])
        backtracking(words)
        words.pop(letter[i])
    }

    answer = dict.indexOf(word)+1
    return answer;
}
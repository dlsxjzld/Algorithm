function solution(begin, target, words) {
    var answer = Number.MAX_SAFE_INTEGER;
    // begin -> target
    // target이 words에 없으면 변환 불가
    if(!words.includes(target)){
        return 0
    }
    // 있으면 변환 가능
    
    // begin에서 words에 있는 단어 중 한글자 차이나는 단어로 바꿀 수 있음
    function canChange (words,currentWord){
        return words.filter((word)=>{
            const intersect = word.split('').filter((char,index)=> char === currentWord[index]).length
            return intersect === word.length-1
        })
    }
    
    
    // 이미 바꿨던 거로는 안바꿔야함
    // target으로 변환하는 과정이 최소인 경우를 구해야함
    function dfs(start,target,words,visited,depth){
        if(start === target){
            answer = Math.min(answer,depth)
            return
        }
        
        const candidates = canChange(words,start)
        
        for(let candidate of candidates){
            const index = words.indexOf(candidate)
            if(!visited[index]){
                visited[index] = true
                dfs(candidate,target,words,visited,depth+1)
                visited[index] = false
            }
            
        }
    }
    
    const visited = Array.from({length:words.length},()=>false)
    dfs(begin,target,words,visited,0)
    
    
    return answer;
}
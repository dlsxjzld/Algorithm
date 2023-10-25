function solution(begin, target, words) {
    var answer = 0;
    const result = []
    // target이 words안에 없을 경우
    if (!words.includes(target)) return answer
    const visited = Array.from({length:words.length},()=>false)

    // target이 words안에 있을 경우
    
    const check = (word, nextWord)=>{
        let letterCnt = 0
        for(let idx=0;idx<word.length;idx++){
            if(word[idx] !== nextWord[idx]){
                letterCnt +=1
            }
        }
        if(letterCnt<=1){
            return true
        }else{
            return false
        }
    }
    function dfs(word,cnt){
        if (word === target) {
            result.push(cnt)
            return
        }
        for(let idx=0;idx<words.length;idx++){
            if(!visited[idx] && check(word,words[idx])){
                visited[idx] = true
                dfs(words[idx],cnt+1)
                visited[idx] = false
            }
        }
    }
    
    for(let idx=0;idx<words.length;idx++){
        if(!visited[idx] && check(begin,words[idx])){
            visited[idx] = true
            dfs(words[idx],1)
            visited[idx] = false
        }
    }
    // console.log(visited)
    // console.log(result)
    answer = Math.min(...result)
    return answer;
}
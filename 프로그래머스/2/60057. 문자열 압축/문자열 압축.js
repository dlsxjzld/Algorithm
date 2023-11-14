function solution(s) {
    var answer = Number.MAX_SAFE_INTEGER;
    let charLength = 0
    
    for(let charLength = 1; charLength<=s.length;charLength++){
        let tmpString = ''
        let cnt = 1 // 압축되는 알파벳의 수
        let start = 0 // 압축 시작하는 인덱스
        let tmpChar = s.slice(start,start+charLength)
        while(start<s.length){
            start += charLength // 증감식
            
            if(tmpChar === s.slice(start,start+charLength)){
                cnt += 1
            }else{
                tmpString += cnt === 1 ? tmpChar : cnt.toString()+tmpChar
                tmpChar = s.slice(start,start+charLength)
                cnt = 1
            }
        }
        answer = tmpString.length < answer ? tmpString.length : answer

        
    }
    
    return answer;
}
function solution(s) {
    let originS = s;
    // 문자열을 자른다
    // 자른 문자열로 압축을 시도한다
    // 남은 문자열은 그냥 붙인다.
    // 1을 제외한 압축된 횟수만큼 숫자를 앞에 붙인다.
    // 길이를 비교한다.
    // 문자열의 길이를 늘려서 처음부터 자른다.
    // ..반복
    let answer = s.length
    
    // aabbacc
    // 2a2ba2c
    
    for(let pressCnt=1; pressCnt<=s.length;pressCnt+=1){ 
        // 1개부터 s개까지 압축 시도
        let copiedS = s
        let pressedS = ''


        let char = copiedS.slice(0,pressCnt)
        let cnt = 0

        while(copiedS.length>0){
            if(char === copiedS.slice(0,pressCnt)){
                cnt +=1
                copiedS = copiedS.slice(pressCnt,)
            }else{
                pressedS += (cnt>1 ? cnt.toString() : '') + char
                char = copiedS.slice(0,pressCnt)
                cnt = 0
                
                if(char < copiedS.length){
                    pressedS += char
                    break
                }
            }
            
            if(copiedS.length === 0){
                pressedS += (cnt>1 ? cnt.toString() : '') + char
            }
            // console.log('cnt',cnt)
            // console.log('char',char)
            // console.log('copiedS.slice(0,pressCnt)',copiedS.slice(0,pressCnt))
            // console.log('pressedS',pressedS)
            // console.log()
            
        }
        
        
        if(pressedS.length < originS.length){
            answer = pressedS.length
            originS = pressedS
        }
    }
    
    
    return answer;
}
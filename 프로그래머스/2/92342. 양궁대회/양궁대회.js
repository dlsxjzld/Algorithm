function solution(n, info) {
    var answer = [];
    let maxDiff = 0
    
    function dfs(ryan,apeach,arrows,index,rInfo){
        if(arrows > n){ // 사용한 화살이 더 많으면 종료
            return
        }
        if(index > 10){
            const diff = ryan-apeach
            // 라이언이 이기지 못하는 경우는 무시
            if (diff <= 0) return;

            // 남은 화살은 0점 과녁에 모두 사용
            rInfo[10] = n-arrows
            
            if(maxDiff < diff){
                maxDiff = diff
                answer = [...rInfo]
            }// 2. 기존 최대 점수 차이와 동일한 경우 (동점자 처리)
            else if (maxDiff === diff) {
                // 낮은 점수부터 비교하여 더 나은 조합인지 확인
                for (let i = 10; i >= 0; i--) {
                    if (rInfo[i] > answer[i]) {
                        answer = rInfo;
                        break;
                    }
                    if (rInfo[i] < answer[i]) {
                        break;
                    }
                }
            }
            return
        }
        // ryan 점수 O
        if(arrows < n){
         dfs(ryan+10-index,apeach,arrows+(info[index]+1),index+1,[...rInfo,info[index]+1])   
        }
        
        if(info[index] > 0){
            // apeach 점수 O
            dfs(ryan,apeach+10-index,arrows,index+1,[...rInfo,0])
        }else{
            // 모두 점수 X
            dfs(ryan,apeach,arrows,index+1,[...rInfo,0])   
        }
    }
    
    dfs(0,0,0,0,[])

    return maxDiff <= 0 ? [-1] : answer;
}
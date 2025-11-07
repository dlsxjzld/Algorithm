function solution(gems) {
    var answer = [1,gems.length];
    let left = 0
    let right = 0
    const AllGems = new Set(gems)
    const AllGemsCount = AllGems.size
    
    const myGems = {}
    const myGemsType = new Set()
    
    for(let i of AllGems){
        myGems[i] = 0
    }
    
    if(AllGemsCount ===1 ){
        return [1,1]
    }
    
    // 오른쪽으로 갈 때 보석 추가하기
    // 모든 종류 있으면 answer에 추가하기
    // 왼쪽에 있는 보석 빼고, 만약 0개면 내 보석 종류에서 제외
    while(left<=right && right<=gems.length){
        if(myGemsType.size !== AllGemsCount){
          if(right<=gems.length-1){
              myGems[gems[right]]+=1
            myGemsType.add(gems[right])
          }
          
          right+=1    
        }
        
        
        if(myGemsType.size === AllGemsCount){
            const cur = answer[1] - answer[0] + 1

            if(right - left + 1 <= cur){
                
                answer = [left+1,right]
            }

            myGems[gems[left]] -=1

            if(myGems[gems[left]] === 0){
                myGemsType.delete(gems[left])
            }
            left+=1

        }

    }
    return answer;
}
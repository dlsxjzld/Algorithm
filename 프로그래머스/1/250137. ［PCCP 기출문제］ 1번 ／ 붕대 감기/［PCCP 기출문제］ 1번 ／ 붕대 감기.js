function solution(bandage, health, attacks) {
    var answer = 0;
    // bandage는 [시전 시간, 초당 회복량, 추가 회복량] 
    // 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며, 
    // 연속 성공 시간이 0으로 초기화됩니다.
    // 연속 성공이 되려다가 
    // 몬스터의 공격이 우선이다 -> 공격이 되어서 체력이 0이하가 되면 연속 성공 이미 초기화 되고 치료 실패
    const [t,x,y] = bandage
    let end = attacks[attacks.length-1][0]
    let start = 0
    let success = 0
    
    const attack = {}
    for(let [time,damage] of attacks){
        attack[time] = damage
    }

    let myHealth = health
    
    for(let start=1;start<=end;start+=1){

        if(attack[start]){
            // 공격이라면 연속 성공 초기화
            // 붕대 못 감음
            success = 0 
            myHealth -= attack[start]
            if(myHealth <=0){
                myHealth = -1
                break
            }
            continue
        }
        // 붕대 감기
        
        myHealth += x
        success +=1
        if(success%t === 0){
            myHealth += y
        }
        if(myHealth > health){
            myHealth = health // 최대 체력 유지    
        }
        
    }
    
    answer = myHealth
    
    return answer;
}
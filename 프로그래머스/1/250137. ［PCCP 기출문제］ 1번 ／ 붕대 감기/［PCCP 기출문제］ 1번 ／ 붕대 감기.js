function solution(bandage, health, attacks) {
    var answer = 0;
    // bandage는 [시전 시간, 초당 회복량, 추가 회복량] 
    // attacks[i]는 [공격 시간, 피해량] 
    let startTime = 0
    let endTime = attacks[attacks.length-1][0]
    
    const convertedAttacks = {}
    for(let [attackTime,damage] of attacks){
        convertedAttacks[attackTime] = damage
    }
    let myHealth = health
    let succeedCount = 0
    const [bandTime,recover,plusRecover] = bandage
    for(let i=1;i<=endTime;i+=1){
        if(convertedAttacks[i] !== undefined){
            myHealth -= convertedAttacks[i]
            succeedCount = 0
        }else{
            succeedCount +=1
            myHealth += recover
            if(succeedCount === bandTime){
                succeedCount = 0
                myHealth += plusRecover
            }
            if(myHealth > health){
                myHealth = health
            }
            
        }
        if(myHealth <=0){
            answer = -1
            break
        }
    }
    answer = myHealth <=0 ? -1 : myHealth
    return answer;
}
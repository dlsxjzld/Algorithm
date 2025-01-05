function makeTable(friends){
    const table = {}
    for(let i=0;i<friends.length;i+=1){
        const cur = friends[i]
        if(!table[cur]){
            table[cur] = {}
        }
        for(let j=0;j<friends.length;j+=1){
            const target = friends[j]
            table[cur][target] = 0
        }
    }
    return table
}

function updateTable(table,gifts){
    for(let gift of gifts){
        const [giver,receiver] = gift.split(' ')
        table[giver][receiver] +=1
    }
}

function updateTotalTable(table,totalTable,friends){
    for(let fr of friends){
        const receiver = table[fr]
        totalTable[fr]['give'] = Object.values(receiver).reduce((a,b)=>a+b,0)
    }
    for(let fr of friends){
        const receiver = table[fr]
        for(let f of friends){
            totalTable[f]['receive'] += receiver[f]
        }
    }
    for(let fr of friends){
        const ta = totalTable[fr]
        totalTable[fr]['giftCount'] = ta['give'] - ta['receive']
    }
    

    
}

function updateAnswer(table,totalTable,friends,answer){
    for(let i=0;i<friends.length;i+=1){
        const I = friends[i]
        for(let j=0;j<friends.length;j+=1){
            const J = friends[j]
            if(i===j) continue
            const IToJ = table[I][J]
            const JToI = table[J][I]
            if((IToJ === 0 && JToI === 0) || IToJ === JToI){
                // 주고 받은 적 없음
                const IGiftCount = totalTable[I]['giftCount']
                const JGiftCount = totalTable[J]['giftCount']
                if(IGiftCount>JGiftCount){
                    answer[I]+=1
                }
            }else{
                if(IToJ > JToI){
                    answer[I] += 1
                }
            }
        }
    }
}

function solution(friends, gifts) {

    const table = makeTable(friends) // giver(key) -> receiver({})
    updateTable(table,gifts)
    const totalTable = {}
    for(let fr of friends){
        totalTable[fr] = {give:0,receive:0,giftCount:0}
    }
    updateTotalTable(table,totalTable,friends)
    const answer = {}
    for(let fr of friends){
        answer[fr] = 0
    }
    updateAnswer(table,totalTable,friends,answer)
    
    
    return Math.max(...Object.values(answer))
}
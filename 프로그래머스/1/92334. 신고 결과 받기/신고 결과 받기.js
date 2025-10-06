function solution(id_list, report, k) {
    var answer = [];
    const caller_map = new Map()
    const called_map = new Map()
    for(let rep of report){
        const [caller,called] = rep.split(' ')
        if(!caller_map.has(caller)){
            const call_list = new Set()
            caller_map.set(caller,call_list.add(called)) // 신고자 : 신고당한 사람
            called_map.set(called,(called_map.get(called) ?? 0) + 1) // 신고당한 사람 : 신고횟수
        }else{
            const call_list = caller_map.get(caller)
            if(!call_list.has(called)){
                called_map.set(called,(called_map.get(called) ?? 0) + 1)
            }
            caller_map.set(caller,caller_map.get(caller).add(called))
        }
    }

    const filteredCalledMap = Array.from(called_map).filter(([name,cnt])=>cnt >= k)
    for(let id of id_list){
        const hasCall = caller_map.get(id)
        if(!hasCall || !filteredCalledMap.length){
            answer.push(0)
            continue
        }
        let myCnt = 0
        for(let [target,cnt] of filteredCalledMap){
            if(hasCall.has(target)){
                myCnt +=1
            }
        }
        answer.push(myCnt)
    }
    return answer;
}
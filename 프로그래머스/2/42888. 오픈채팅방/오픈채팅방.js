function solution(record) {
    var answer = [];
    const dict = new Map()
    for (const rec of record){
        const recArray = rec.split(' ')
        if(recArray[0] === 'Enter'){
            dict.set(recArray[1],recArray[2])
        }else if(recArray[0] === 'Change'){
            dict.set(recArray[1],recArray[2])
        }
    }
    for (const rec of record){
        const recArray = rec.split(' ')
        if(recArray[0] === 'Enter'){
            answer.push(`${dict.get(recArray[1])}님이 들어왔습니다.`)
        }else if(recArray[0] === 'Leave'){
            answer.push(`${dict.get(recArray[1])}님이 나갔습니다.`)
        }
    }
    return answer;
}
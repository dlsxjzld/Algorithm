function convert(time){
    const [hour,minute] = time.split(':').map(Number)
    return hour*60 +minute
}
function solution(fees, records) {
    var answer = [];
    
    const inoutRecords = new Map() // 입출차 기록
    const timeRecords = new Map() // 차량 별 시간 기록
    
    records.forEach((record,idx)=>{
        const [time,car,action] = record.split(' ')
        const convertedTime = convert(time)

        if(!inoutRecords.has(car)){
            // 차량이 없다면 in 처리
            inoutRecords.set(car,convertedTime)
        }else{
            // 차량이 있다면 out 처리하고 시간 기록
            if(!timeRecords.has(car)){
                // 시간 기록에 차량이 없는 경우면
                timeRecords.set(car,convertedTime - inoutRecords.get(car))
            }else{
                // 시간 기록에 차량이 있는 경우면
                timeRecords.set(car,timeRecords.get(car) + convertedTime -inoutRecords.get(car))
            }
            inoutRecords.delete(car)
        }
    })
    if(inoutRecords.size > 0){
        // 출차처리하지 않은 차가 있다면
        // 입차만 하고 출차를 한번도 하지 않은 차가 있을 수 있으므로
        // timeRecords.get(car) || 0 으로 설정
        Array.from(inoutRecords.keys()).forEach(car=>{
            timeRecords.set(car,(timeRecords.get(car) || 0) + convert('23:59')-inoutRecords.get(car))
            inoutRecords.delete(car)
        })
    }
    const sortedTimeRecords = Array.from(timeRecords.keys()).sort()

    sortedTimeRecords.forEach(car=>{
        let totalFee = 0
        const [defaultTime, defaultFee, perTime,perFee] = fees
        let useTime = Number(timeRecords.get(car))
        if(useTime <= defaultTime){
            totalFee = defaultFee
        }else{
            totalFee = defaultFee + Math.ceil((useTime-defaultTime)/perTime)*perFee
        }
        answer.push(totalFee)
    })
    return answer;
}
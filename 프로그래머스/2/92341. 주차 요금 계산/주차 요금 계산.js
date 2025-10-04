function convert(time){
    const [hour,min] = time.split(':').map(Number)
    return hour*60 + min
}

function solution(fees, records) {
    var answer = [];
    const [defaultTime, defaultFee, perTime,perFee] = fees
    
    const inAndOutRecord = new Map()
    const timeRecord = new Map()
    
    
    for(let record of records){
        const [time,car,status] = record.split(' ')
        if(status === 'IN'){
            inAndOutRecord.set(car,convert(time))
        }else{
            const inTime = inAndOutRecord.get(car)
            timeRecord.set(car, (timeRecord.get(car) ?? 0) + convert(time) - inTime)
            inAndOutRecord.delete(car)
        }
    }
    
    if(inAndOutRecord.size > 0){
        for(let [car,inTime] of Array.from(inAndOutRecord)){
            timeRecord.set(car, (timeRecord.get(car) ?? 0) + convert('23:59') - inTime)
        }
    }
    
    const feeRecord = Array.from(timeRecord).map(([car,time])=>{
        if(time <= defaultTime){
            return [car,defaultFee]
        }else {
            return [car,defaultFee + Math.ceil((time - defaultTime)/perTime) * perFee]
        }
    })
    
    answer = feeRecord.sort((a,b)=>a[0] - b[0]).map(([car,fee])=>fee)
    
    return answer;
}
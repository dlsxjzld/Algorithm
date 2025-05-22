// 셔틀은 09:00부터 총 n회 t분 간격으로 역에 도착하며, 하나의 셔틀에는 최대 m명의 승객이 탈 수 있다.
// 셔틀은 도착했을 때 도착한 순간에 대기열에 선 크루까지 포함해서 대기 순서대로 태우고 바로 출발한다. 
// 예를 들어 09:00에 도착한 셔틀은 자리가 있다면 09:00에 줄을 선 크루도 탈 수 있다.

function convertTimeTableToMinute (timeTable){
    return timeTable.map((time)=> {
        const [hour,min] = time.split(':').map(Number)
        return hour*60 + min}).sort((a,b)=>a-b)
}

function convertTime (time){

    const hour = Math.floor(time/60)
    const min = time%60


     return '0'.repeat(2-hour.toString().length)+`${hour}:`+'0'.repeat(2-min.toString().length) + `${min}`
}

function solution(n, t, m, timetable) {
    var answer = '';
    const timeTable = convertTimeTableToMinute(timetable)
    
    let startTime = 60 * 9 // 셔틀 탑승 시간
    for(let bus = 0; bus < n;bus +=1){
        
        const possiblePeople = timeTable.filter((time)=>time<=startTime).length // 현재 탈 수 있는 사람
        if(bus === n-1){ // 마지막 버스에서 콘은 타야한다.
            if(possiblePeople >=m){
                startTime = timeTable[m-1]-1 // 가장 마지막에 타는 사람 이전 사람의 시간이 콘의 시간
            }
            // possiblePeople < m 이면 다 탈 수 있으므로 startTime은 그대로.
        }else{ // 이전 버스들은 보내도 된다.
            if(possiblePeople <= m){ // 현재 탈 수 있는 사람이 m명보다 작거나 같으면 현재 탈 수 있는 사람은 다 탈 수 있다.
                timeTable.splice(0,possiblePeople)
            }else{ // 현재 탈 수 있는 사람이 m명보다 크면 m명만 갈 수 있다
                timeTable.splice(0,m)
            }
            startTime += t
        }
    }
    
    answer = convertTime(startTime)

    return answer;
    
}
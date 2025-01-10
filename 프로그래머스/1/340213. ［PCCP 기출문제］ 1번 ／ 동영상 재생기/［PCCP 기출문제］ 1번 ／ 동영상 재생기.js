function checkOpeningTime(time,op_start,op_end){
    let startTime = convertTime(time)
    const open_start = convertTime(op_start)
    const open_end = convertTime(op_end)
    if(open_start <= startTime && startTime <=open_end){
        return op_end
    }
    return time
}
function convertTime(time){
    const [min,sec] = time.split(':').map(Number)
    return min*60 + sec
}
function convertForm(realTime){
    const min = Math.floor(realTime / 60).toString()
    const sec = (realTime % 60).toString()
    return '0'.repeat(2-min.length)+min+':'+'0'.repeat(2-sec.length)+sec
}
function zeroFill(time){
    const [min,sec] = time.split(':').map(val=>val.toString())
    return '0'.repeat(2-min.length)+min+':'+'0'.repeat(2-sec.length)+sec
}
function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let myTime = pos
    for(let com of commands){
        myTime = checkOpeningTime(myTime,op_start,op_end) // mm:ss
        const realTime =convertTime(myTime)
        if(com === 'next'){
            if(realTime + 10 >= convertTime(video_len)){
                myTime = video_len
            }else{
                myTime = convertForm(realTime +10)
            }
        }else{
            if(realTime - 10 <= 0 ){
                myTime = '00:00'
            }else{
                myTime = convertForm(realTime - 10)
            }
        }
    }
    myTime = checkOpeningTime(myTime,op_start,op_end)
    answer = myTime
    

    return answer; // "mm:ss"
}

function convertTime (start,end){
    const [sh,sm] = start.split(':').map(Number)
    const [eh,em] = end.split(':').map(Number)
    return (eh-sh)*60 + (em-sm)
}

function parseMelody (melodies){
    const hasOctav = {'A':true,'C':true,'D':true,'F':true,'G':true,'B':true,'E':false}
    const parsedMelody = []
        for(let idx=0;idx<melodies.length;idx++){
            const melody = melodies[idx]
            if(hasOctav[melody]) { // # 있을 수 있음
                if(idx === melodies.length-1){ // 마지막 위치면 그냥 추가
                    parsedMelody.push(melody)
                }else{
                    if(melodies[idx+1] === '#'){ // 마지막 위치가 아니므로 확인
                        parsedMelody.push(melody+'#')
                        idx+=1
                    }else{
                        parsedMelody.push(melody)
                    }
                }
            }
            else{ // # 없으므로 그냥 추가하면 됨
                parsedMelody.push(melody)
            }
        }
        return parsedMelody
}

function makeNewMusicInfo (musicinfo,index){
    
    const [start,end,musicName,melodies] = musicinfo.split(',')
    const [sh,sm]= start.split(':').map(Number)
        const musicPlayTime = convertTime(start,end)
        
        const parsedMelody = parseMelody(melodies)
        let finalMelody = null
        
        if(musicPlayTime > parsedMelody.length){ // 재생시간이 더 길면 멜로디 늘려야함
            const repeatTime =Math.ceil(musicPlayTime/parsedMelody.length)

            let tmp =[]
            for(let i=0;i<repeatTime;i++){
                tmp = tmp.concat(parsedMelody)
            }

            finalMelody = tmp.slice(0,musicPlayTime)
        }else{ // 재생시간이 더 짧으면 멜로디 잘라야함
            finalMelody = parsedMelody.slice(0,musicPlayTime)
        }
        return [musicPlayTime,musicName,[...finalMelody],sh*60+sm]
}

function match(m,melody){
    // console.log('m,melody',m,melody)
    // console.log('m.length',m.length)
    if(m.length > melody.length){
        return false
    }
    for(let i=0;i<=melody.length-m.length;i++){
        if(m.join('') === melody.slice(i,i+m.length).join('')){
            return true
        }
    }
   
    return false
}

function solution(m, musicinfos) {
    
    const parsedM = parseMelody(m.split(''))
    var answer = '';

    
    const musicInfos = musicinfos.map((musicinfo,index)=> makeNewMusicInfo(musicinfo,index))

    const filteredMusic = musicInfos.filter(([_,_1,melody])=>match(parsedM,melody)).sort((a,b)=>b[0]-a[0] || a[3]-b[3])
    // console.log(filteredMusic)
    if(filteredMusic.length === 0){
        answer = '\(None\)'
    }else{
        answer = filteredMusic[0][1]
    }
  
    // console.log(answer)
    return answer;
}
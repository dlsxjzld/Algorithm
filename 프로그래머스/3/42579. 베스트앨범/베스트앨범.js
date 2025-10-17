function solution(genres, plays) {
    var answer = [];
    // 각 장르별 재생된 수의 합 기록
    // classic: 1450
    // pop: 3100
    
    // 각 장르별 재생된 곡의 번호
    // classic: 0,2,3
    // pop: 1,4
    
    // classic: { total : 1450, list: [{title:0,play:500},{title:2,play:150},{title:3,play:800}]}
    // pop: { total : 3100, list: [{title:1,play:600},{title:4,play:2500}]}
    
    const playList = new Map()
    for(let i=0;i<plays.length;i+=1){
        const currentGenre = genres[i]
        const currentPlay = plays[i]
        const isInitial = !playList.get(currentGenre)

        if(isInitial){
            playList.set(currentGenre, {
                total:currentPlay, list:[{title:i,play:currentPlay}]
            })

        }else{
            const myList = playList.get(currentGenre)
            const newList = [...myList.list]
            
            newList.push({title:i,play:currentPlay})
            newList.sort((a,b)=>b.play-a.play)

            playList.set(currentGenre,{
                total:myList.total + currentPlay,
                list:newList}
            )
        }
    }
    
    const tmp = Array.from(playList).sort((a,b)=> b[1].total-a[1].total)

    answer = tmp.map((val)=>val[1].list)
        .map((genList)=>genList.filter((l,index)=>index<2))
        .flatMap(val=>val)
        .map(({title})=>title)
    
    
    return answer;
}
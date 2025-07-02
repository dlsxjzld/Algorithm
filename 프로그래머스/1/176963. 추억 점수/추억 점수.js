function solution(name, yearning, photo) {
    var answer = [];
    const scores = {}
    name.forEach((key,index)=>{
        scores[key] = yearning[index]
    })
    
    answer = photo.map((row)=>row.reduce((prev,cur)=>prev+ (scores[cur] ?? 0),0))
    
    return answer;
}
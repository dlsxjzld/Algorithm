function solution(score) {
    var answer = [];
    const averages = score.map(([eng,math])=>(eng+math)/2)
    const sortedScore = [...averages].sort((a,b)=>b-a)
    answer = averages.map((score)=>sortedScore.indexOf(score)+1)
    return answer;
}
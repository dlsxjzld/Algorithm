function solution(s) {
    var answer = s.slice(2,-2).split('},{')
    .map((str)=>str.split(',').map(Number))
    .sort((a,b)=>a.length - b.length)
    .reduce((prev,cur)=> [...prev,...cur.filter((value)=>!prev.includes(value))],[])
    

    return answer;
}
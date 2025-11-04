function solution(sizes) {
    var answer = 0;
    // 가로는 눕히면 세로가 될 수 있다
    // 세로는 눕히면 가로가 될 수 있다
    const row = sizes.map(([a])=>a)
    const col = sizes.map(([a,b])=>b)
    const MAX = Math.max(...sizes.flat())
    // 둘 중 더 큰 게 MAX 따라가기
    const max = []
    const min = []
    for(let [r,c] of sizes){
        if(r > c){
            max.push(r)
            min.push(c)
        }else{
            max.push(c)
            min.push(r)
        }
    }
    console.log(max,min)
    answer = Math.max(...max) * Math.max(...min)
    return answer;
}
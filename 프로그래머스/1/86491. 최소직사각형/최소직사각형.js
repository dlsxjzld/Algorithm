function solution(sizes) {
    var answer = 0;
    // 가로는 눕히면 세로가 될 수 있다
    // 세로는 눕히면 가로가 될 수 있다
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

    answer = Math.max(...max) * Math.max(...min)
    return answer;
}
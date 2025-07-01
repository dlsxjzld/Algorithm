function solution(wallpaper) {
    var answer = [];
    const positions = []
    for(let i=0;i<wallpaper.length;i+=1){
        for(let j=0;j<wallpaper[0].length;j+=1){
            if(wallpaper[i][j] === '#'){
                positions.push([i,j])
            }
        }
    }

    answer.push(Math.min(...positions.map(([x,y])=>x)),
    Math.min(...positions.map(([x,y])=>y)),
    Math.max(...positions.map(([x,y])=>x))+1,
    Math.max(...positions.map(([x,y])=>y))+1)

    return answer;
}
function dfs(x,y,l,arr,answer){ // x 위치, y 위치, 길이, arr
    
    // console.log("x,y,l,arr,answer",x,y,l,arr,answer)
    const cnt = [0,0] // 0과 1의 개수


    for(let r=x;r<x+l;r++){
        for(let c=y;c<y+l;c++){
            cnt[arr[r][c]] += 1
        }
    }

    if(cnt[0] === l*l){ // 0 압축 가능
        answer[0]+=1
        // console.log('zero',answer)
        return
    }else if(cnt[1] === l*l){ // 1 압축 가능
        answer[1] +=1
        return
    }
    else{ // 4분할 후 다시 dfs
        // console.log('divide',answer)
        // if(l>=2){
            const newL = l/2
            dfs(x,y,newL,arr,answer)
            dfs(x,y+newL,newL,arr,answer)
            dfs(x+newL,y,newL,arr,answer)
            dfs(x+newL,y+newL,newL,arr,answer)
        // }
    }
}

function solution(arr) {
    var answer = [0,0]; // 0과 1의 개수
    const arrL = arr.length // 초기 길이
    
    dfs(0,0,arrL,arr,answer)
    
    
    return answer;
}
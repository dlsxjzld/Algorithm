function solution(arr) {
    var answer = 0;
    arr.unshift(0)
    while(true){
        const before = arr.concat([])
        arr.forEach((v,i)=>{
        if (v>=50 && !(v%2)){
            arr[i] = (v/2)
        }else if (v<50 && v%2){
            arr[i] = ((v*2)+1)
        }
    })
        answer +=1
        
        let flag = false
        for (let i=0;i<arr.length;i++){
            if(before[i] === arr[i]){
                flag = true
            }else{
                flag = false
                break
            }
        }
        if(flag===true){
            answer -=1
            break
        }
    }

    return answer;
}
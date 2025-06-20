function solution(number) {
    var answer = 0;
    
    for(let i=0;i<number.length;i+=1){
        const first = number[i]
        for(let j=i+1;j<number.length;j+=1){
            const second = number[j]
            for(let k=j+1;k<number.length;k+=1){
                const third = number[k]
                if(first+second+third === 0){
                    answer +=1
                }
            }
        }
    }
    return answer;
}
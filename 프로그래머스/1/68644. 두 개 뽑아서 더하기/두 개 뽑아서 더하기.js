function solution(numbers) {
    var answer = [];
    
    
    for(let i=0;i<numbers.length;i+=1){
        for(let j=i+1;j<numbers.length;j+=1){
            const target = numbers[i] + numbers[j]
            if(!answer.includes(target)){
                answer.push(target)
            }
        }
    }
    
    answer.sort((a,b)=>a-b)
    
    return answer;
}
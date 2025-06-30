function solution(babbling) {
    var answer = 0;
    const avail = ['aya','ye','woo','ma']
    for(let bab of babbling){
        for(let ava of avail){
            if(!bab.includes(ava.repeat(2))){
                bab = bab.replaceAll(ava,' ')
            }
        }
        
        if(bab.trim().length === 0){
            answer +=1
        }

    }
    return answer;
}
function solution(phone_book) {
    var answer = true;
    // 10^6
    // 10^1
    
    const phoneBook = phone_book.sort((a,b)=>a.length-b.length)
    const hash = {}
    
    for(let i=0;i<phone_book.length;i+=1){
        const cur = phone_book[i]
        if(!hash[cur]){
            hash[cur] = true
        }
        let tmp = ''
        for(let j=0;j<cur.length;j+=1){
            tmp+=cur[j]
            if(tmp !==cur && hash[tmp]){
                answer = false
            }
        }
    }
    return answer;
}
function solution(s, skip, index) {
    var answer = '';
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').filter((val)=>!skip.includes(val))
    
    for(let i=0;i<s.length;i+=1){
        const cur = s[i]
        const curIndex = alphabet.indexOf(cur)
        const nextIndex = (curIndex + index) % alphabet.length
        answer += alphabet[nextIndex]
    }

    
    return answer;
}
function solution(s) {
    var answer = '';
    answer = s.split(' ').map((word)=>{
        const newWord = word.split('').map((char,idx)=>{
            if(idx%2){
                return char.toLowerCase()
            }
            return char.toUpperCase()
        })
        return newWord.join('')
    }).join(' ')
    
    return answer;
}
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const dict = alphabet.split('')
function solution(msg) {
    var answer = [];
    // 글자수는 1이상 100이하
    if(msg.length === 1){
        answer.push(dict.indexOf(msg)+1)
        return answer
    }
    
    let i = 0
    while(i<msg.length){
        let cur = msg[i]
        let next = ''
        let stop = i
        for(let j=i;j<msg.length;j+=1){
            next += msg[j]
            if(dict.indexOf(next) === -1){
                dict.push(next)
                break
            }else{
                stop = j
            }
        }
        cur = msg.slice(i,stop+1)
        

        answer.push(dict.indexOf(cur) +1)
        if(i === stop){
            i+=1
        }else{
            i = stop+1    
        }
    }
    
    
    return answer;
}
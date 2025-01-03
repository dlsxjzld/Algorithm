function solution(p) {
    var answer = '';
    if(isCorrect(p)){
        return p
    }else{
        let left = 0
        let right = 0
        let u = ''
        let v = ''
        for(let i=0;i<p.length;i+=1){
            if(p[i] === '('){
                left +=1
            }else{
                right +=1
            }
            if(left === right){
                u = p.slice(0,i+1)
                v = p.slice(i+1)
                break
            }
        }

        if(isCorrect(u)){
            answer = u+ isRight(v)
        }else{
            const tmp = u.slice(1,-1).split('')
            let result = tmp.map((val)=>val === '(' ? ')' : '(')
            answer = '(' + isRight(v) + ')'+ result.join('')
        }
    }
    return answer;
}

// u,v 분리
function isRight(p) {
        if(p ==='') return ''
        let left = 0
        let right = 0
        let u = ''
        let v = ''
        for(let i=0;i<p.length;i+=1){
            if(p[i] === '('){
                left +=1
            }else{
                right +=1
            }
            if(left === right){
                u = p.slice(0,i+1)
                v = p.slice(i+1)
                break
            }
        }
    
        if(isCorrect(u)){
            return u+isRight(v)
        }else{
            const tmp = u.slice(1,-1).split('')
            let result = tmp.map((val)=>val === '(' ? ')' : '(')
            return '(' + isRight(v) + ')'+ result.join('')
        }
    
}

function isCorrect(w){
    let sum =0
    for(let a of w){
        if(a === '('){
            sum+=1
        }else{
            sum -=1
        }
        if(sum <0) return false
    }
    return true
}
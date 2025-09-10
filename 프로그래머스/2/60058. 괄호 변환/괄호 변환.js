// 올바른 문자열인지 확인

// 맞으면 바로 return

// 아니면 분리 및 합치기
// 문자열 w를 u,v로 분리하기
// u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.

function isCorrect(input){
    let sum = 0

    for(let i=0;i<input.length;i+=1){
        const char = input[i]
        if(char === '('){
            sum +=1
        }else{
            sum -=1
        }
        if(sum <0){
            return false
        }
    }
    
    return sum === 0
}



function solution(p) {
    if(isCorrect(p)){
        return p
    }else{
        
        let left = 0
        let right = 0
        let u =''
        let v =''

        for(let i=0;i<p.length;i+=1){
            const char = p[i]
            if(char === '('){
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
            return u + solution(v)
        }else{
            const slicedU = u.slice(1,-1).split('')
            return '('+ solution(v) +')' + slicedU.map((val)=>val === '(' ? ')' : '(').join('')
        }

    }
}
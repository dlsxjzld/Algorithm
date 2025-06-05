function checkNotNumberType (char){
    if(char.trim() === ''){
        return true
    }
    const convertedChar = Number(char)
    return isNaN(convertedChar)
}


function solution(files) {
    
    const splitedFiles = []
    // HEAD, NUMBER, TAIL 로 나누기
    for(let file of files){
        let head =''
        let number = ''
        let tail =''
        let currentIndex = -1
        const fileName = file.split('')

        // head
        for(let [index,letter] of fileName.entries()){
            const isNotNumber = checkNotNumberType(letter)
            if(isNotNumber) {
                head += letter
            }else{
                currentIndex = index
                break
            }
        }
        // number
        for(let [index,letter] of fileName.entries()){
            if(index < currentIndex){
                continue
            }
            const isNotNumber = checkNotNumberType(letter)
            if(isNotNumber) {
                currentIndex = index
                break
            }else{
                if(number.length === 5){
                    currentIndex = index
                    break
                }
                number += letter
                currentIndex = index
            }
        }
        // tail
        if(currentIndex !== fileName.length-1){
            tail = fileName.slice(currentIndex).join('')    
        }
        splitedFiles.push([head,number,tail])
    }

    // 숫자를 반영한 정렬 기능
    const answer = splitedFiles.sort((a,b)=>{
        const [aHead,aNumber,aTail] = a
        const [bHead,bNumber,bTail] = b
        // HEAD 부분을 기준으로 사전 순으로 정렬
        // 문자열 비교 시 대소문자 구분을 하지 않는다

        if(aHead.toLowerCase() < bHead.toLowerCase()){
            return -1
        }else if(aHead.toLowerCase() > bHead.toLowerCase() ){
            return 1
        }
        else {
            // HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬
            if(Number(aNumber) < Number(bNumber)){
                return -1
            }else if(Number(aNumber) > Number(bNumber)){
                return 1
            }else{
                // HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지
                return 0
            }
        }
    })
    return answer.map((val)=>val.join(''))

    

}
function solution(files) {
    var answer = [];
    const sorted_files = []
    
    for(const file of files){
        const sp_file = file.split('')
        let idx = 0
        let head = ''
        let number = ''
        let tail = ''
        
        for(const [i,str] of sp_file.entries()){
            let num = Number(str)
            if(str === ' ' || isNaN(num)){ // 변환한 값이 문자면
                head += str
            }else{ // 변환한 값이 숫자면 -> head는 끝
                idx = i
                break
            }
        }

        let cnt = 0 // 숫자의 개수
        
        for(let i=idx;i<sp_file.length;i++){
            let num = Number(sp_file[i])
            if(!isNaN(num)){ // 숫자면 추가
                cnt +=1
                if(cnt>5){
                    tail = sp_file.join('').slice(i,file.length)
                    break
                }
                number += sp_file[i]
            }else{
                tail = sp_file.join('').slice(i,file.length)
                break
            }
        }
        sorted_files.push([head,number,tail])
    }

    answer = sorted_files.sort((a,b)=>{
        let aHead = a[0].toLowerCase()
        let bHead = b[0].toLowerCase()
        let aNumber = Number(a[1])
        let bNumber = Number(b[1])
        if(aHead < bHead){
            return -1
        }
        if(aHead>bHead){
            return 1
        }else{
            if(aNumber<bNumber){
                return -1
            }else if(aNumber>bNumber){
                return 1
            }else{
                return 0
            }
        }
        return 0
        
    }).map(arr=>arr.join(''))

    
    return answer;
}
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function sliceStr (str){
    const strArr = []
    // 두 글자씩 끊기

    for(let i=0;i<str.length-1;i+=1){
        const cur = str.slice(i,i+2)
        if(alphabet.includes(cur[0]) && alphabet.includes(cur[1])){
            strArr.push(cur)   
        }
        
    }
    
    
    return [...strArr]
}

function intersection (str1,str2){
    const str1Len = str1.length
    const str2Len = str2.length
    const inter = []
    const newStr1 = [...str1]
    const newStr2 = [...str2]
    
    for(let i=0;i<str1Len; i+=1){
        const cur = newStr1[i]
        const str2HasStr1 = newStr2.indexOf(cur)

        if(str2HasStr1 !== -1){
            inter.push(cur)
            newStr2.splice(str2HasStr1,1)
        }
    }
    
    for(let i=0;i<inter.length;i+=1){
        const cur = inter[i]
        const idx = newStr1.indexOf(cur)
        newStr1.splice(idx,1)
    }
    // 교집합
    // A - 교집합
    // B - 교집합
    return {newStr1,newStr2,inter}
}

function solution(str1, str2) {
    
    const str1Arr = sliceStr(str1.toLowerCase())
    const str2Arr = sliceStr(str2.toLowerCase())
    
    const {newStr1,newStr2,inter} = intersection(str1Arr,str2Arr)

    const unionSize = newStr1.length + newStr2.length + inter.length
    
    if(unionSize === 0 ){
        return 65536
    }else{
        return Math.floor((inter.length / unionSize)*65536)
    }
    

    
    // 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값

}
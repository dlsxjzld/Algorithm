function convert(n,k){

    let num = n
    let rest = n%k
    let converted = rest.toString()
    while(num > k){
        num = Math.floor(num/k)
        rest = num%k
        converted = rest.toString() + converted
    }
    
    return converted
}

function isPrime(num){
    if(num === 1){
        return false
    }
    if(num === 2 || num === 3) {
        return true
    }
    const end =  Math.floor(Math.sqrt(num))+1
    
    for(let i=2;i<end;i+=1){
        if(num%i === 0){
            return false
        }
    }
    return true
}

function solution(n, k) {
    var answer = -1;
    const convertedNum = convert(n,k)

    const splitedNums = convertedNum.split('0').filter(Boolean).map(Number)

    answer = splitedNums.filter((splitedNum)=>isPrime(splitedNum)).length
    return answer;
}
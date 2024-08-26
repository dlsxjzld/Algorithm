function convert (n,k){
    if(k === 10) return n.toString()
    let tmp =''
    while(n > k){
        let rest = n%k
        tmp = rest+tmp
        n= Math.floor(n/k)
    }
    tmp = n + tmp
    return tmp
}

function isPrime (n){
    if(n<=1) return false
    const limit = Math.floor(Math.sqrt(n))+1
    for(let i=2;i<limit;i++){
        if(n%i === 0){
            return false
        }
    }
    
    return true
}

function solution(n, k) {
    var answer = -1;
    const convertedN = convert(n,k)

    const numbers = convertedN.split('0').filter(Boolean)
    answer = numbers.filter((number)=>isPrime(number)).length

    return answer;
}
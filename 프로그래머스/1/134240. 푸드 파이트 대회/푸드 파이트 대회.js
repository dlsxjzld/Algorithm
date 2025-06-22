function solution(food) {
    var answer = '';
    const half = food.reduce((prev,cur,idx)=>{
        const rep = Math.floor(cur/2)
        return prev+ idx.toString().repeat(rep)
    },'')

    const reversedHalf = half.split('').reverse().join('')
    answer = half+'0'+reversedHalf

    return answer;
}
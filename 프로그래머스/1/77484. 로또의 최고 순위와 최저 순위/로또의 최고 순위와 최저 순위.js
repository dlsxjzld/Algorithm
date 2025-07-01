function solution(lottos, win_nums) {
    var answer = [];
    const winning = {
        6:1,
        5:2,
        4:3,
        3:4,
        2:5,
        1:6,
        0:6
    }
    const MAX = 45
    
    const matchLottoNumbers = lottos.filter((lotto)=>win_nums.includes(lotto))
    const fullNumbersWithoutMatch = Array.from({length:MAX},(_,idx)=>idx+1).filter((val)=>!matchLottoNumbers.includes(val))

    answer.push(winning[lottos.filter((val)=>val === 0).length + matchLottoNumbers.length])
    answer.push(winning[matchLottoNumbers.length])
    return answer;
}
function solution(word) {
    var answer = 0;
    const letter = ['A','E','I','O','U']
    const words = []
    const dict = []
    
    const backtracking = function(array){
        if(array.length <=5){
            dict.push(array.join(''))
            for(let i=0;i<5;i++){
                array.push(letter[i])
                backtracking(array)
                array.pop(letter[i])
            }
            
        }
        return
    }
    for(let i=0;i<5;i++){
        words.push(letter[i])
        backtracking(words)
        words.pop(letter[i])
    }

    answer = dict.indexOf(word)+1
    return answer;
}
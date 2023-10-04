function solution(myString) {
    var answer = '';
    myString = myString.split('')
    for (let [i,str] of myString.entries()){

        if (str ==='a'){
            myString[i] = 'A'
        }
        if (str !=='A' && str.toUpperCase() === str){
            myString[i] = str.toLowerCase()
        }
    }

    answer = myString.join('')
    return answer;
}
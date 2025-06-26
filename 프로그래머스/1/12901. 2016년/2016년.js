function solution(a, b) {
    var answer = '';
    const week = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    const restMonths = a-1

    const restDays = month.slice(0,restMonths).reduce((a,b)=>a+b,0) +  b-1

    answer = week[(restDays%7)]
    
    return answer;
}
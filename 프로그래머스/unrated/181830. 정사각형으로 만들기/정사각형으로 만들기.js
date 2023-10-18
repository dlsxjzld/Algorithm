function solution(arr) {
    var answer = [];
    let row = arr.length
    let col = arr[0].length
    let diff = Math.abs(row-col)
    if (row>col){
        for(const a of arr){
            for(let i=0;i<diff;i++){
                a.push(0)
            }
        }
    }else if(row<col){
        for(let i=0;i<diff;i++){
            arr.push(Array(col).fill(0))
        }
    }
    answer = arr
    
    return answer;
}
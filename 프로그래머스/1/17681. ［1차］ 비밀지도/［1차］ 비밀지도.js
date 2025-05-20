// 1은 # 0은 ' ' 변환
function changeGraph (graph){
    return graph.map((row)=>row.map((val)=>val === 1 ? '#' : ' ').join(''))
}


// 0과 1 만나면 1
// 1과 0 만나면 1
// 1과 1 만나면 1
// 0과 0 만나면 0
// | 연산자
function getOrOperand (arr1,arr2){
    return arr1.map((row,ridx) => row.split('').map((val,cidx)=> val | arr2[ridx][cidx]))
}

// 각 배열의 행 순회
// 행에서의 1개의 열 값을 2진법으로 변환
function getConvertedArr (arr,n){
    return arr.map((val)=> '0'.repeat(n-val.toString(2).length) + val.toString(2))
}



function solution(n, arr1, arr2) {
    var answer = [];
    
    const convArr1 = getConvertedArr(arr1,n)
    const convArr2 = getConvertedArr(arr2,n)

    const graph = getOrOperand(convArr1,convArr2)
    answer = changeGraph(graph)

    
    return answer;
}
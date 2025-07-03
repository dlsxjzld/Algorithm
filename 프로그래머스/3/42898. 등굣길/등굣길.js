
function solution(M, N, puddles) {
    const T = Array(M).fill(null).map(() => [])
    const chk = new Set(puddles.map(([x,y]) => `${x-1}:${y-1}`));
    for (let i = 0; i < M ; i++) {
        for (let j = 0 ; j < N ; j++) {
            if (chk.has(`${i}:${j}`)) {
                T[i][j] = 0;
            } else if (i === 0 && j === 0) {
                T[i][j] = 1;
            } else if (i === 0) {
                T[i][j] = T[i][j-1];
            } else if (j === 0) {
                T[i][j] = T[i-1][j];
            } else {
                T[i][j] = (T[i-1][j] + T[i][j-1]) % 1000000007;
            }
        }
    }
    return T[M-1][N-1];
}
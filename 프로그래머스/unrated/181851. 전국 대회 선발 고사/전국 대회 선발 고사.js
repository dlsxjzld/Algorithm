function solution(rank, attendance) {
    var answer = 0;
    const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
    answer =  10000 * a[1] + 100 * b[1] + c[1];
    return answer;
}
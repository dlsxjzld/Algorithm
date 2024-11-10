function solve() {
    const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    const n = parseInt(input[0].split(' ')[0]);
    const m = parseInt(input[0].split(' ')[1]);
    const map = [];
    const row = new Array(n).fill(false);
    const col = new Array(m).fill(false);
    let c = 0;
    let r = 0;

    // Reading the map input
    for (let i = 0; i < n; i++) {
        const line = input[i + 1];  // input starts from index 1, because input[0] is the n and m values
        map[i] = line.split('');
        for (let j = 0; j < m; j++) {
            if (map[i][j] === 'X') {
                col[j] = true;
                row[i] = true;
            }
        }
    }

    // Counting rows that do not have 'X'
    for (let i = 0; i < n; i++) {
        if (!row[i]) {
            r++;
        }
    }

    // Counting columns that do not have 'X'
    for (let i = 0; i < m; i++) {
        if (!col[i]) {
            c++;
        }
    }

    // Output the larger of the two counts
    console.log(Math.max(c, r));
}

solve();

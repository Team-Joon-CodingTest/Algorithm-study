const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim().split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [N] = input[0];
    const paper = input.slice(1);
    let result = new Array(N).fill(0);

    for(let i=0; i<N; i++){
        let ai = 0;
        for(let j=0;j<N; j++){
            if(i===j) continue;

            ai |= paper[i][j];
        }
        result[i] = ai;
    }
    console.log(result.join(' '));
}

solution();
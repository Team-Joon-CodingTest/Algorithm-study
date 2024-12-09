const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const testCase = input.slice(1);

    for(let i=0; i<testCase.length; i+=2) {
        const [_,M] = input[i];
        const level = input[i+1];
        const marked = level[M];
        let count = 1;

        while(marked !== level[0]){
            if(level[0] === Math.max(...level)){
                level.shift();
                count++;
            } else {
                level.shift();
                level.push(level[0]);
            }
        }

        console.log(count);
    }


}

solution();

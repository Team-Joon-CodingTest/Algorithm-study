const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const balloons = input[1];
    const stack = [];
    const result = [];

    for(let i=0; i<N; i++){
        stack.push([i+1,balloons[i]]);
    }

    while(stack.length > 0){
        const [idx,value] = stack.shift();
        result.push(idx);

        if(stack.length === 0) break;

        if(value > 0){
            for(let i=0; i<value-1; i++) {
                stack.push(stack.shift());
            }
        } else {
            for(let i=0; i<Math.abs(value); i++) {
                stack.unshift(stack.pop());
            }
        }
    }

    console.log(result.join(' '));

}

solution();

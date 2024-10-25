const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ').map(Number);


function solution(){
    // 1 <= E <= 15, 1 <= S <= 28, 1 <= M <= 19
    const [E,S,M] = input;
    let year = 1;
    let arr = [1,1,1];

    while ( 1 ){
        if(E === arr[0] && S === arr[1] && M === arr[2]) return console.log(year);

        arr[0]++;
        arr[1]++;
        arr[2]++;
        year++;

        if(arr[0] === 16) arr[0] = 1;
        if(arr[1] === 29) arr[1] = 1;
        if(arr[2] === 20) arr[2] = 1;

    }


}

solution();
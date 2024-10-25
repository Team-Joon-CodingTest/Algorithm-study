const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution(){
    // 처음 시도한 방법 ( 입력값 순서에 따라 연결된 컴퓨터가 제대로 추가되지 않을 수 있음 )
    // const connections = input.slice(2);
    // const stack = [1];
    // for( const [e1,e2] of connections){
    //     if(stack.includes(e1)){
    //         stack.push(e2);
    //         continue;
    //     }
    //     if(stack.includes(e2)){
    //         stack.push(e1);
    //     }
    // }
    // const result = new Set(stack);
    // console.log(result.size-1);

    // 인접 그래프 방식
    const N = input[0][0];
    const connections = input.slice(2);
    const networks = Array.from({length: N+1}, () => []);
    const visited = new Array(N+1).fill(false);
    let  count = 0;

    connections.forEach(([e1,e2])=>{
        networks[e1].push(e2);
        networks[e2].push(e1);
    });

    function dfs(x){
        visited[x] = true;
        for(const e of networks[x]){
            if(!visited[e]) {
                count++;
                dfs(e);
            }
        }
    }

    dfs(1);

    console.log(count);
}

solution();
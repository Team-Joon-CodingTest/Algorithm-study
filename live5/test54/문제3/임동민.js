function solution(n, lost, reserve) {
    let result = n - lost.length;
    const map = Object.create(null);
    reserve.forEach((e)=>{
        if(!map[e]) map[e] = true;
    })

    lost.forEach((e)=>{
        if(map[e]) {
            map[e] = false;
            result++;
        }
    })

    lost.forEach((e)=>{
        if(map[e-1]){
            result++;
            map[e-1] = false;
        } else if(map[e+1]){
            result++;
            map[e+1] = false;
        }
    })
    return result;
}
function solution(citations) {
    let result = 0;

    for(let i=0; i<=citations.length; i++) {
        const count = citations.filter(e => e >= i).length;
        if(count >= i){
            result = i;
        }
    }
    return result;
}
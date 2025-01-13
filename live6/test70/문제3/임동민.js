function solution(priorities, location) {
    const target = priorities[location];
    const queue = [...priorities];
    let result = 0;

    while(queue[0] !== target){
        if(queue[0] >= Math.max(...queue)){
            queue.shift();
            result++;
        } else {
            queue.push(queue.shift());
        }
    }

    return result;

}
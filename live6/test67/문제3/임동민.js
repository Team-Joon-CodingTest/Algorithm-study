function solution(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z0-9]/g, '');
    str1 = str1.toLowerCase();

    str2 = str2.replace(/[^a-zA-Z0-9]/g, '');
    str2 = str2.toLowerCase();

    const stack1 = [];
    const stack2 = [];

    for(let i=0; i<str1.length-1; i++){
        stack1.push(str1[i] + str1[i+1]);
    }

    for(let i=0; i<str2.length-1; i++){
        stack2.push(str2[i] + str2[i+1]);
    }

    const gyo = [];
    const temp = [...stack2];

    for(const e of stack1){
        const idx = temp.indexOf(e);
        if(idx !== -1){
            gyo.push(e);
            temp.splice(idx,1);
        }
    }

    const hap = [...stack1];
    for (const e of stack2) {
        const idx = stack1.indexOf(e);
        if (idx === -1) {
            hap.push(e);
        } else {
            stack1.splice(idx, 1);
        }
    }

    if (hap.length === 0) {
        return 65536;
    }

    return (gyo.length / hap.length) * 65536;

}
function divingBoard(a, b, k) {
    let arr = [];
    if(a==0 && b==0)return arr;
    if(k==0)return arr;
    for(let i =0;i<k+1;i++){
        let sum = a*i+b*(k-i);
        arr.unshift(sum);
    }
    return arr
}
console.time();
console.log(divingBoard(1,2,3));
console.timeEnd();
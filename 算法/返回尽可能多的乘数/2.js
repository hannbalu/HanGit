function common(num){
    let arr =[];
    let divided = num;
    for(let i=2;i<=divided;i++){
        if(divided%i===0){
            arr.push(i);
            divided=divided/i;
            i=1;
        }
    }
    return arr
}

console.time();
console.log(common(21));
console.timeEnd();
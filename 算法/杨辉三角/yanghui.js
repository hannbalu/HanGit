function yanghui(num){
    let arr=[];
    let temp=1;
    for(let i=0;i<num;i++){
        arr.push(temp);
        temp=temp*(num-1-i)/(i+1);
    }
    return arr
}
console.log(yanghui(6));
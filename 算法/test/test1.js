function evaluate(arr){
    let result=0;
    let final=0;
    let times = 0;
    for(let i=0;i<arr.length;i++){
        result+=arr[i]*(i+1);
        times+=arr[i];
    }
    final = Math.floor((result*10)/times)/10;
    return final
}

console.log(evaluate([2,2,1,1,2]))
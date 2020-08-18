function youhui(arr){
    let prePrice=0;
    let finalPrice=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i][0]<arr[i][1]){
            prePrice+=arr[i][1];
        }else{
            prePrice+=arr[i][0];
            finalPrice+=(arr[i][0]-arr[i][1]);
        }
    }
    return (prePrice+' '+finalPrice);
}

let arr = [[5,3],[10,5],[1,2]];
console.log(youhui(arr));
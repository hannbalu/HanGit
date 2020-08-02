function findNum(arr){
    let nums=[];
    let tempArr=[];
    for(let i=0;i<arr.length;i++){
        if(tempArr[arr[i]]==1){
            nums.unshift(arr[i]);
            tempArr[arr[i]]=0;
        }else{
            tempArr[arr[i]]=1;
        }
    }
    return nums;
}
console.time();
console.log(findNum([1,2,4,4,3,3,1,5,3]));
console.timeEnd();
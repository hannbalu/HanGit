let times=0;

function findMin(arr){
    let minNum=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<minNum){
            minNum=arr[i]
        }
    }
    for(let i=0;i<arr.length;i++){
        times+=1;
        if(arr[i]==minNum){
            arr.splice(i,1);
            return findMin(arr);
        }
    }
    return times-1
}

console.log(findMin([6,4,2,1,3]))
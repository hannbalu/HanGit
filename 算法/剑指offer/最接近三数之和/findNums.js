/* 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

 */
function findNums(arr,target){
    let temp1 = arr[0];
    let temp2 = arr[1];
    let temp3 = arr[2];
    let result = temp1+temp2+temp3;
    for(let i=3;i<arr.length;i++){
        let temp = Math.abs(arr[i]-target);
        if(temp<Math.abs(temp1-target)){
            temp3= temp2;
            temp2=temp1;
            temp1=arr[i];
        }else if(temp<Math.abs(temp2-target)){
            temp3=temp2;
            temp2=arr[i];
        }else if(temp<Math.abs(temp3-target)){
            temp3=arr[i];
        }
    }
    return result
}

console.log(findNums([-1,2,1,-4],1))
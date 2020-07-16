/* 给定两个数组，写一个方法计算它们的交集
例： num1=[1,2,2,1,2,3],num2=[2，2]
返回[2,2] */

/* var sameNum = function(nums1,nums2){
    if(nums1.length==0 || nums2.length==0)return;
    var  arr=[];
    nums1.sort((a,b)=>(a-b));
    nums2.sort((a,b)=>(a-b));
    let i = j =0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            i++
        }
        else if(nums1[i]>nums2[j]){
            j++
        }
        else{
            arr.push(nums1[i]);
            i++;
            j++;
        }
    }
    return arr;
}
 */
var sameNum = function(nums1,nums2){
    let maxArr=nums1.length>nums2.length?nums1:nums2;
    let minArr=nums1.length>nums2.length?nums2:nums1;
    let sameNums=[];
    let i=0;
    let j=minArr.length;
    let arr = [];
    while(j<maxArr.length){
        /* arr=maxArr.slice(i,j)
        for(let k=0;k<minArr.length;k++){
            if(arr[0]==minArr[k]){
                sameNums.push(minArr[k]);
            }
            if(sameNums.length==minArr.length)return sameNums
        }
        i++;
        j<maxArr.length?j=j+1:maxArr.length
    } */
    if()
    return sameNums
}
console.time();
console.log(sameNum([1,2,2,1,2,3],[2,2]));
console.timeEnd();
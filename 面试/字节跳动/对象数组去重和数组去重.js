

let deleteObject=(obj)=>{
    let keyObj={};
    let newObj={};
    for(let i in obj){
        if(!keyObj[i]){
            newObj[i]=obj[i];
            keyObj[i]=1;
        }
    }
    return newObj
}
let arr1 = [{
    key: '01',
    value: '乐乐'
 }, {
    key: '02',
    value: '博博'
 }, {
    key: '03',
    value: '淘淘'
 },{
    key: '04',
    value: '哈哈'
 },{
    key: '01',
    value: '乐乐'
 }];

 console.log(deleteObject(arr1));
 
//数组去重
let arr =[1,2,3,4,1,2,5,6];

let deleteArr=(arr)=>{
    let keyArr = [];
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(!keyArr[arr[i]]){
            newArr.push(arr[i]);
            keyArr[arr[i]]=1;
        }
    }
    return newArr
}

console.log(deleteArr(arr));
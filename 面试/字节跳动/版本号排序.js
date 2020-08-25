/* versions是一个项目的版本号列表，因多人维护，不规则 
var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3'] 要求从小到大排序，
注意'1.45'比'1.5'大。var sorted=['1.5','1.45.0','3.3.3.3.3.3','6'] */

function compare(num1,num2){
    let arr1 = num1.split('.');
    let arr2 = num2.split('.');
    let i =0;
    while(arr1[i] || arr2[i]){
        if(!arr1[i] && arr2[i]){
            return true
        }
        else if(arr1[i] && !arr2[i]){
            return false
        }
        if(parseInt(arr1[i])<parseInt(arr2[i])){
            return true
        }else if(parseInt(arr1[i])>parseInt(arr2[i])){
            return false
        }else{
            i++
        }
    }
}

function sortVersion(arr){
    if(arr.length<2)return arr
    let midNum = arr[Math.floor(arr.length/2)];
    let arrRight = [];
    let arrLeft = [];
    for(let i=0;i<arr.length;i++){
        if(compare(arr[i],midNum)){
            arrLeft.push(arr[i]);
        }else{
            arrRight.push(arr[i]);
        }
    }
    sortVersion(arrRight);
    sortVersion(arrLeft);
    return (arrLeft.concat(arrRight))
}
console.time();
console.log(sortVersion(['1.45.0','1.5','6','3.3.3.3.3.3.3']));
console.timeEnd()
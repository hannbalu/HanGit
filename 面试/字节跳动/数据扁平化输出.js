/* [1,2,[3,4,[5,{a:1},[6]]]]

输出：[1,2,3,4,5,{a:1},6] */

function flat(arr,newArr){
    for(let i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flat(arr[i],newArr);
        }else{
            newArr.push(arr[i])
        }
    }
}

function flatOuter(arr){
    let newArr = [];
    flat(arr,newArr);
    return newArr
}

console.log(flatOuter([1,2,[3,4,[5,{a:1},[6]]]]))
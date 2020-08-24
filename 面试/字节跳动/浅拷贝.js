let shallowClone = (arr)=>{
    let newArr= [];
    for(let prop in arr){
        if(arr.hasOwnProperty(prop)){
            newArr[prop]=arr[prop];
        }
    }
    return newArr
}

let arr1 = [
    1,
    {name:'a'}
]

let arr2 = shallowClone(arr1);
arr2[1].name='b';
console.log(arr1);

/* Array.prototype.concat()
Array.prototype.slice()
Object.assign();
以上三种方法均是浅拷贝 */

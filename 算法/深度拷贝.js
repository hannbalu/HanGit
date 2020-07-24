var deepCopy =function(obj){
    let newObj={};
    for(let i in obj){
        if(Object.prototype.hasOwnProperty.call(obj,i)){
            if(typeof obj[i]==='object'){
                newObj[i] = deepCopy(obj[i]);
            }else{
                newObj[i]=obj[i];
            }
        }
    }
    return newObj
}
let person = {
    name: 'gxr',
    age: 22,
    friend: {
        janiffer: {
            age: 34,
            address: 'hangzhou'
        },
        john: {
            age: 24,
            address: 'beijing'
        }
    }
}
let person2=deepCopy(person);
console.time();
console.log(person2);
console.timeEnd();
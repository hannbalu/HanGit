let deepClone = (obj)=>{
    let type = Object.prototype.toString.call(obj).slice(8);
    let newObj;
    switch(type){
        case 'Object]':
            newObj={};
            break;
        case 'Array]':
            newObj=[];
            break;
        default:
            type;
            break;
    }
    for(let i in obj){
        let value = Object.prototype.toString.call(obj[i]).slice(8);
        if(value==='object]' || value==='Array]'){
            newObj[i]=deepClone(obj[i]);
        }else{
            newObj[i]=obj[i];
        }
    }
    return newObj
}
let person = {
    name: 'gxr',
    age: 22,
    arr:[[1,2],3],
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
let person2=deepClone(person);
person2.friend.john.age=25;
console.time();
console.log(person2);
console.timeEnd();
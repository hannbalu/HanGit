function add(x,y){
    return x+y;
}

function curryAdd(x){
    return function(y){
        return x+y
    }
}

/* 柯里化就是将接受多个参数的函数转换为接受一个参数的函数
并返回接受余下函数的这个过程 */

//参数可复用
function curryingCheck(reg){
    return function(txt){
        return reg.test(txt);
    }
}

let hasNumber = curryingCheck(/\d+/g);
let hasLetter = curryingCheck(/[a-zA-Z]+/g);

console.log(hasNumber('Han'));
console.log(hasLetter('1234'));
//promise其参数为一个执行器函数executor，
//该函数会被立即调用，执行器函数会接受两个参数
//这两个参数均为函数

//如果Promise处理的为一个异步函数，那么当then的时候
//执行器函数中的参数会被放到异步任务队列中
//此时Promise的实例仍为默认状态
//在不知道哪个回调函数会被执行
//需要把两个回调函数保存

//对于executor函数的异常情况
//出错了就直接进入reject方法

//promise虽然是异步函数，但是promise实例化（new 的过程）是同步的
//而then中注册回调才是异步执行
function Promise(executor){
    let self=this; //保留this，防止后面方法出现this指向不明的问题
    self.status='pending'; //promise的默认状态是pending
    self.success= undefined;//保存成功回调传递的值
    self.error = undefined;

    self.onSuccessCallbacks = [];//存放成功的回调
    self.onErrorCallbacks = [];

    function resolve(success){
        if(self.status==='pending'){
            self.status='resolved'; //成功函数将状态修改为resolved
            self.success = success ;//将成功的值保存起来
            self.onSuccessCallbacks.forEach(element =>{
                element();
            })
        }
    }
    function reject(error){
        if(self.status==='pending'){
            self.status='rejected';
            self.error = error;
            self.onErrorCallbacks.forEach(element =>{
                element();
            })
        }
    }
    try{
        executor(resolve,reject);
    }catch(err){
        reject(err);
    }
}

//为Promise实例能够调用then方法，将then放在原型链上，
//它接受两个参数，一个为成功的回调函数，一个为失败的回调函数
Promise.prototype.then=function(onResolved,onRejected){
    let self = this;
    //每个then都需要返回一个promise
    let promiseAgain = new Promise((resolve,reject)=>{
        if(self.status==='pending'){
            self.onSuccessCallbacks.push(()=>{
                let x= onResolved(self.success);//将resolve函数保留的成功值传递作为参数
                resolvePromise(promiseAgain,x,resolve,reject);
            });
            self.onErrorCallbacks.push(()=>{
                let x =onRejected(self.error);
                resolvePromise(promiseAgain,x,resolve,reject);
            });
        }
        if(self.status==='resolved'){
           let x =onResolved(self.success);//将resolve函数保留的成功值传递作为参数
           resolvePromise(promiseAgain,x,resolve,reject);
        }
        if(self.status==='rejected'){
            let x = onRejected(self.error);
            resolvePromise(promiseAgain,x,resolve,reject);
        }
    })
    return promiseAgain
}

//最后需要完善Promise的链式调用
//实现链式调用是通过then方法返回一个新的promise
function resolvePromise(promiseAgain,x,resolve,reject){
    if(promiseAgain===x){
        return reject(new TypeError('循环使用'));//如果x为自身则结束，防止回调陷阱
    }
    if(x!==null && (typeof x ==='object'|| typeof x ==='function')){
        try{
            let then = x.then;//保存每个promise函数的then
            //判断then方法的类型，如果是函数则返回一个promise
            if(typeof then ==='function'){
                then.call(x,(res)=>{
                    resolvePromise(promiseAgain,res,resolve,reject);
                },(err)=>{
                    resolvePromise(promiseAgain,err,resolve,reject);
                })
            }else{
                resolve(x);//如果不是函数类型则直接进入成功方法
            }
        }catch(err){
            reject(err);
        }
    }else{
        resolve(x);
    }
}

//测试用例1：
/* let promise=new Promise((resolve,reject)=>{
    console.log('start');
    resolve('success msg');
    reject('error msg');
})

promise.then(res=>{
    console.log('res:',res);
},err=>{
    console.log('err:',err);
})
 */

//测试用例2：
let promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('success msg')
        reject('error msg')
    },2000)
})
promise.then(res=>{
    console.log('success:',res)
},err=>{
    console.log('error:',err)
})
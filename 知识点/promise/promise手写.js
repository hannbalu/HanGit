//promise其参数为一个执行器函数executor，
//该函数会被立即调用，执行器函数会接受两个参数
//这两个参数均为函数

//如果Promise处理的为一个异步函数，那么当then的时候
//执行器函数中的参数会被放到异步任务队列中
//此时Promise的实例仍为默认状态
//在不知道哪个回调函数会被执行
//需要把两个回调函数保存
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
    executor(resolve,reject);
}

//为Promise实例能够调用then方法，将then放在原型链上，
//它接受两个参数，一个为成功的回调函数，一个为失败的回调函数
Promise.prototype.then=function(onResolved,onRejected){
    let self = this;
    if(self.status==='pending'){
        self.onSuccessCallbacks.push(()=>{
            onResolved(self.success);//将resolve函数保留的成功值传递作为参数
        });
        self.onErrorCallbacks.push(()=>{
            onErrorCallbacks.push(()=>{
                onRejected(self.error);
            })
        })
    }
    if(self.status==='resolved'){
        onResolved(self.success);//将resolve函数保留的成功值传递作为参数
    }
    if(self.status==='rejected'){
        onRejected(self.error);
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
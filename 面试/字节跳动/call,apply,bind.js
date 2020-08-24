//apply:
Function.prototype.myApply=function(context=window,args=[]){
    if(typeof this!=='function' || typeof this!=='Object'){
        throw new TypeError('Error');
    }
    const self = Symbol();
    context[self]=this;

    const result = context[self](...args);
    delete context[self]
    return result
}

//call:
Function.prototype.myCall=function(context=window,...args){
    const self = Symbol();
    context[self]=this;
    const result = context[self](...args);
    delete context[self];
    return result
}

//bind:
Function.prototype.myBind = function(context=window){
    return (...args)=>{
        this.call(context,...args)
    }
}
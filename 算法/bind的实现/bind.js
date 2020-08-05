Function.prototype.Bind=function(obj){
    let _this=this;
    return (function(){
        _this.apply(obj)
    })
}

let newThis = {};

let getThis=function(){
    console.log(this);
};

getThis.Bind(newThis);
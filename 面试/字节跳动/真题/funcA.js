window.name='ByteDance';
function A(){
    this.name=123;
}
Function.prototype.get=function(){
    console.log(this);
    return this.name+1
}

let a = new A();
let funcA=a.get();
funcA();
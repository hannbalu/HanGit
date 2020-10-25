let Fn = function(){
    this.name='Fn';
}
Fn.prototype.getName=function(){
    this.name='Fn2'
}
let fn = new Fn();
fn.getName()
console.log(fn.name)
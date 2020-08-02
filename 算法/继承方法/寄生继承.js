/* 创建一个仅用于封装继承过程的函数，返回对象 */

function createObj(obj){
    function F(){};
    F.prototype=obj;
    return new F();
}
//该方法在es5中有了Object.create(obj)的写法

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.getInfo=function(){
    console.log(`${this.name},${this.age}`)
}

let P1=new Person('Han',24);
//以上为原型继承，下面将原型继承套个壳子可传参

function Student(obj,score){
    let sub=createObj(obj);
    sub.score=score;
    return sub
}

let S1=new Student(P1,100);

console.log(S1)
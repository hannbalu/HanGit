/* 通过调用父类构造，继承父类属性保留传参的优点 
通过将父类实例作为子类原型，实现函数复用
不存在属性共享的问题，可传参
调用了两次父类构造函数
 */
function Person(name,age){
    this.name=name;
    this.age=age;
    this.play=[1,2,3];
    this.setAge=function(){
        console.log(`${this.age}`)
    }
}
Person.prototype.setPlay=function(){
    this.play.push(4);
}

function Student(name,age,score){
    Person.call(this,name,age);
    this.score=score;
    this.getScore=function(){
        console.log(`StudentgetScore:${this.score}`)
    }
}
Student.prototype=new Person();
Student.prototype.constructor=Student;//修复构造函数指向
Student.prototype.sayHello=function(){
    console.log(`hello world`);
}
var S1=new Student('Han',24,100);
var S2=new Student('Han2',25,120);
S2.setPlay();
console.log(S1.play)
console.log(S2.play)
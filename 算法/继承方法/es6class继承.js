/* 通过extends实现 */

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showName(){
        console.log(`调用父类的方法:${this.name},${this.age}`)
    }
    showAge(){
        console.log(this.age)
    }
}
let P1=new Person('Kobe',39);

class Student extends Person{
    constructor(name,age,score){
        super(name,age);
        this.score=score;
    }
    showName(){
        console.log(`调用子类方法:${this.name},${this.age},${this.score}`)
    }
}
let S1=new Student('Han',24,100);
S1.showName();
S1.showAge();

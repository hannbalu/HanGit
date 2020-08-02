/* 关键在于，在子类构造函数中通过call（）方法调用父类构造函数
只能访问到父类自身的方法属性，父类的原型方法属性无法访问到
可以实现多继承，用call的方法 */

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.setGender=function(gender){
    this.gender=gender
}

function Activity(sports){
    this.sports=sports;
}

function Student(name,age,code,sports){
    Person.call(this,name,age);
    Activity.call(this,sports)
    this.code=code;
}

var S1=new Student('Han',24,52,'basketball');
S1.setGender('male');
console.log(S1);
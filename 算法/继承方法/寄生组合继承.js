

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.getInfo=function(){
    console.log(`${this.name},${this.age}`)
}

function Student(name,age,score){
    Person.call(this,name,age);
    this.score=score;
}
Student.prototype=Object.create(Person.prototype);
let S1 = new Student('Han',24,100);
console.log(S1);
S1.getInfo();
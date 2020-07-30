/* 子类型的原型为父类型的一个实例对象
通过改写原型对象，指向一个新的实例对象
子类的prototype指向父类的实例
所有子类的实例可以通过_proto_访问到父类prototype
这样子类的实例化对象就可以将父类的私有、公有属性当作子类公有属性
来自原型对象的所有属性方法被子类实例共享
创建子类无法向父类传参 */

function superType(){
    this.property=true;
}

superType.prototype.getSuperValue=function(){
    return this.property
}

function subType(){
    this.subProperty=false;
}

subType.prototype=new superType();

subType.prototype.getSubValue=function(){
    return this.subProperty
}

let test=new subType();
console.log(test.getSubValue());
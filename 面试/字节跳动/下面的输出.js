let a = {
    name:'bytedance',
    func:function(){
        console.log(this);
    }
}

let fun1 = a.func;
fun1();

  //输出undefined 由于func方法是输出调用对象的name属性
  //fun1 是由外部调用 而非a 所以调用对象的name属性为undefined
  
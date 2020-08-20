var a = {
    name: 'bytedance',
    func: function() {
      console.log(this.name);
    }
  };
   
var fun1 = a.func;
  fun1();
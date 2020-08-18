/* 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

思路：
    通过两个栈，来模拟队列（先进先出），
    当执行队列的 push 操作时，直接将元素 push 进栈1中。
    当队列执行 pop 操作时，首先判断栈2是否为空，
    如果不为空则直接 pop 元素。
    如果栈2为空，则将栈1中的所有元素 pop 然后 push 到栈2中，
    然后再执行栈2的 pop 操作。 
    注：
    使用两个长度不同的栈来模拟队列时，队列的最大长度为较短栈的2倍
    */

    let arr1=[];
    let arr2=[];
    
    function push(node){
        arr1.push(node);
    }
    function pop(){
        if(!arr2.length){
            while(arr1.length){
                arr2.push(arr1.pop());
            }
        }
        return arr2.pop();
    }
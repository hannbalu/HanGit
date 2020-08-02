/* 实现一个方法，传入一个整数
返回尽可能多的乘数

输入 8 输出 2，2，2
输入 32 输出 2，2，2，2，2
输入 21 输出 3，7 */
var arr=[];
var turnNums = function(num){
    if(num==1)return
    let NumToogle=false;
    let tempNum = 2;
    while(!NumToogle){
        if(num%tempNum===0){
            arr.push(tempNum);
            NumToogle=!NumToogle;
        }else{
            tempNum++
        }
    }
    let tempNum2=num/tempNum;
    turnNums(tempNum2);
    return arr
}

console.time();
console.log(turnNums(100));
console.timeEnd();
/* 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），
每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？
例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，
此时得到的最大乘积是18。 */

/* 思路：
首先判断乘数有可能是哪些，实际上只能是2，3，也可能是4但是等价于2*2
5《2*3，6《3*3，更大的也一样会拆解
输入2固定返回1，输入3固定返回2，
另外2*2*2《3*3，所以直接用num除以3，余数可能为0，1，2，判断条件即可 */

function cutRope(num){
    let timeNum=Number.MIN_SAFE_INTEGER;
    if(num===2)return 1;
    if(num===3)return 2;
    let x = num%3;
    let y = Math.floor(num/3);
    switch(x){
        case 0:
            timeNum=Math.pow(3,y);
            break;
        case 1:
            timeNum=2*2*Math.pow(3,y-1);
            break;
        case 2:
            timeNum=2*Math.pow(3,y);
            break;
        default :
            timeNum;
            break;
    }
    return timeNum;
}

console.log(cutRope(8));
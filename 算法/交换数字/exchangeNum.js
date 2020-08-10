/* 题目：0-n ，n个数，
    找其中两个数并交换，
    且只能交换一次，
    要使得交换后的数字最小。 */

/* 思路：遍历这n个数，找到降序排列里最小的数字x，
    将x与前面的数字逐一比较，大于x则继续往前，
    当找到了小于x的数字y时，将x与y后面的数字交换即可 */
function exchangeNum(str){
    let minNum = Number.MAX_SAFE_INTEGER;
    let minKey = null;
    let tempNum = 0;
    for(let i=1;i<str.length;i++){
        if(str[i-1]>str[i] && str[i]<minNum){
            minNum=str[i];
            minKey=i;
        }
    }
    for(let i =str.length-1;-1<i;i--){
        if(str[i]<minNum){
            tempNum=str[i];
            str[i]=minNum;
            str[minKey]=tempNum;
        }else if(i==0){
            tempNum=str[0];
            str[0]=minNum;
            str[minKey]=tempNum;
        }
    }
    return str
}

console.log(exchangeNum([4,5,2,7,6,1]))
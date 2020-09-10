function getInter( array ,  start ) {
    // write code here
    if(start<1)return 0
    if(!array)return 0
    
    let result = 0;
    let number = 0;
    let i =0;
    let j =1;
    while(array[i]){
        if(result==start)break
        if(array[i]!==j){
            result++
        }else{
            i++
        }
        j++
    }
    if(result>0)number=j-1
    return number
}
console.log(getInter([1,2,3,4,5,6],5));

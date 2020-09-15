function findMax(string='ABCDDFFFEE',string2='ABCDD'){
    let result = 0;
    let temp = 0;
    let i =0;
    let j =0;
    let long = string.length>string2.length?string:string2;
    let short = string.length<string2.length?string:string2;
    while(i<long.length && j<short.length){
        if(long[i]==short[j]){
            temp++;
            j++
        }else{
            if(temp>result)result=temp;
            temp=0;
        }
        i++
    }
    if(temp>result)result=temp;
    return result
}

console.log(findMax());
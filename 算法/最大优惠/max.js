function dikou(total,youhuiArr){
    let arr=[];
    function _dikou(total,youhuiArr,arr){
        if(total<youhuiArr[youhuiArr.length-1])return arr;
        if(total>=youhuiArr[0]){
            arr.push(youhuiArr[0])
            retrun _dikou(total-youhuiArr[0],youhuiArr,arr)
        }else{
            arr.splice(0,1)
            return _dikou(total,youhuiArr,arr);
        }
    }
    return _dikou(total,youhuiArr,arr);
}
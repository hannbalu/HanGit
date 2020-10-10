function checkStr(str){
    let arr =[];
    for(let i=0;i<str.length;i+=3){
        arr.push(str.slice(i,i+3).split(''));
    }
    
    //确认不相同的字符位置
    let differentKey = 3;
    let different = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i][0]!==arr[0][0] && differentKey!==0){
                differentKey=0;
                different++;
        }
        if(arr[i][1]!==arr[0][1] && differentKey!==1){
                differentKey=1;
                different++;
        }
        if(arr[i][2]!==arr[0][2] && differentKey!==2){
                differentKey=2;
                different++;
        }
        if(different>1){
            console.log('No');
            return
        }
    }
    if(different<2)console.log('Yes');
}

checkStr('ABCABDAEC');
function Add(arr){
    let i = arr.length-1;
    let addToogle=true;
    while(addToogle && i>-1){
        arr[i]+=1;
        if(arr[i]==10){
            arr[i]=0;
            if(i==0)arr.unshift(1);
            i--;
        }else{
            addToogle=!addToogle;
        }
    }
    return arr
}

console.time();
console.log(Add([0,9,9]));
console.timeEnd();
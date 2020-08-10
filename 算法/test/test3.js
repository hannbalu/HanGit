let bonus = 0;

function jiangli(arr){
    let toogle=false;
    for(let i=arr.length-1;-1<i;i--){
        if(arr[i-1]==arr[i]){
            if(!toogle)toogle=!toogle;
            arr.splice(i-1,2,arr[i]+1);
            bonus+=1
        }
    }
    if(toogle){
        return jiangli(arr);
    }else{
        return bonus
    }
}

console.log(jiangli([1,1,1,1,1]))
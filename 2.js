function stages(num){
    if(!num || num>36)return 0;
    if(num==1)return 1;
    if(num==2)return 2;
    return stages(num-1)+stages(num-2)
}

console.log(stages(4));
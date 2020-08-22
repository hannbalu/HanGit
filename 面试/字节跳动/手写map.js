Array.prototype.map2=function(fn){
    if(!Array.isArray(this)){
        return false
    }else{
        let resArr=[];
        for(let i=0;i<this.length;i++){
            resArr.push(fn(this[i],i,this));
        }
        return resArr
    }
}

let arr = [1,2,3,4,5];
let arr2 = arr.map2((item)=>item+1)
console.log(arr2);
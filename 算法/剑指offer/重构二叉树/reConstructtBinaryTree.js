function reConstructBinary(pre,vin){
    let res ={};
    if(res.length ==0 || vin.length==0)return
    
    if(pre.length==1){
        res={
            val:pre[0],
            left:null,
            right:null
        }
    }else if(pre.length>1){
        let index = Math.floor(vin.length/2);
        let vinLeft = vin.slice(0,index);
        let vinRight = vin.slice(index+1);
        let root = pre[0];
        pre.shift();
        let preLeft=pre.slice(0,index);
        let preRight = pre.slice(index);
        res = {
            val:root,
            left:reConstructBinary(preLeft,vinLeft),
            right:reConstructBinary(preRight,vinRight),
        }
    }
    return res
}
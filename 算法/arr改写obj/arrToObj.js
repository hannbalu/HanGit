function change(arr){
    let obj = {
        obj:{},
    };
    let temp={};
    for(let i=0;i<arr.length;i++){
        if(arr[i].parent==null){
            temp=obj['obj'];
            temp.id=arr[i].id;
            temp.parent=arr[i].parent;
        }else{
            temp.child={};
            temp=temp.child;
            temp.id=arr[i].id;
            temp.parent=arr[i].parent;
        }
    }
    return obj
}

var arr = [{
            id: 1,
            parent: null
        }, {
            id: 2,
            parent: 1
        }, {
            id: 3,
            parent: 2
        }];
console.time();
console.log(change(arr));
console.timeEnd();
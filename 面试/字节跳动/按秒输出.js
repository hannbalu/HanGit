//1秒后输出1 2秒后输出4 3秒后输出5

let a = [1,4,5,7,9];

function count(arr){
    arr.map((item,index)=>{
        setTimeout(()=>{
            let time = new Date();
            console.log(item,time);
        },(index+1)*1000);
    })
}
count(a);

/* for(let i=0;i<a.length;i++){
    setTimeout(()=>{
        let time = new Date();
        console.log(a[i],time);
    },(i+1)*1000);
} */
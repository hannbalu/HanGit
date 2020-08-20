//1秒后输出1 2秒后输出4 3秒后输出5

let a = [1,4,5,7,9];

function count(arr){
    arr.map((item,index)=>{
        setTimeout(()=>{
            console.log(item);
        },(index+1)*1000);
    })
}

count(a);
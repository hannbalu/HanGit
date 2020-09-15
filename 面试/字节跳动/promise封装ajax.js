let ajax = function(params){
    if(!params.url)retrun 
    let promise = new Promise((resolve,reject)=>{
        const handler = function(){
            if(this.readyState!==4)return
            if(this.status ==200 || this.status==304){
                try{
                    let resonse =JSON.parse(this.responseText)
                    resolve(resonse)
                }catch(error){
                    reject(error);
                }
            }else{
                reject(new Error(this.statusText))
            }
        }
        const xhr = new XMLHttpRequest();
        if(params.method.toLowerCase()==='get'){
            xhr.open('get',url+'?'+formatParams(params.data));
            xhr.send();
        }else{
            xhr.open('post',url);
            xhr.send(JSON.stringify(params.data));
        }
        xhr.onreadystatechange = handler;
        xhr.responseType='json';
        xhr.setRequestHeader('Accept','application/json');
    })
    return promise

    function formatParams(obj){
        if(!obj)retrun
        let arr = [];
        for(let i in obj){
            arr.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`)
        }
        return arr.join('&');
    }
}
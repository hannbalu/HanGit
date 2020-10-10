
//let xhr = new XMLHttpRequest() 创建AJAX 实例
function ajax(option){
    let xhr = new XmLHttpRequest();
    xhr.open(option.type,option.url); //打开url Http请求方法、请求地址（API接口地址），设置异步或同步 true为异步
    xhr.send();//发送请求主体内容
    xhr.onreadystatechange = function(){
        //监听AJAX状态码及服务器响应状态码
        if(xhr.readyState===4 && /^(2|3)\d{2}/.test(xhr.status)){
            let res = xhr.responseText;
        }
    }
}
/* xhr.response 响应主体内容
xhr.responseText 响应主体内容是字符串形式（JSON或XML）
xhr.responseXML 相应主体内容是XML文档

 */
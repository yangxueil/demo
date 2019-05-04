//验证用户名
var username=document.getElementById('username');
var password=document.getElementById('pass');
var span=document.getElementsByClassName('sp1');
username.onblur=function(){
    var reg=/^1[358][0-9]{9}$|^[\u4e00-\u9fa5]{2-4}$\|^[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/;
    if(!reg.test(username.value)){
        span[0].innerHTML='格式不正确！';
    }
};
username.onfocus=function(){
    span[0].innerHTML='';
};
//验证密码
password.onblur=function(){
    var pattern=/^\w{6-10}$/;
    if(!pattern.test(username.value)){
        span[1].innerHTML='格式不正确！';
    }
};
password.onfocus=function(){
    span[1].innerHTML='';
};


    // ;







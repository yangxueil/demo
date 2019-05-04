//验证码    ?计时器累加问题未解决
var btn=document.getElementsByClassName('tableText')[0];
var timer=null;
var num=60;
btn.onclick=function(){
    timer=setInterval(auto,1000);
    btn.disabled=true;
};
function auto(){
    num--;
    if(num<=0){
        clearInterval(timer);
        btn.innerHTML='获取验证码';
        btn.disabled=false;
        num=60;
    }else{
        btn.innerHTML=num+'秒重获验证码';
    }
}
//判断密码是否一致
var a=document.getElementById("password");
var b=document.getElementById("rePassword");
var tableBtn=document.getElementsByClassName('tableBtn')[0];
tableBtn.onclick=function(){
    if(a.value!=b.value){
        alert('两次密码不一致');
    }
    else{
        alert('提交成功');
    }
}


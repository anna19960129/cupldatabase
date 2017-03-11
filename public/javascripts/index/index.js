/**
 * Created by wgw on 2017/2/9.
 */
var checkSubmit = function() {
    var userName = document.getElementById("loginName").value;
    if(userName == ""){
        alert("请输入用户名");
        return false;
    }
    var password = document.getElementById("loginPassword").value;
    if(password == ""){
        alert("请输入密码");
        return false;
    }
    return true;
}
var checkRegisterSubmit = function() {
    var uN = document.getElementById("loginNameR").value;
    var p1 = document.getElementById("passwordR1").value;
    var p2 = document.getElementById("passwordR2").value;
    if(uN == ""||p1 == ""||p2 == ""){
        alert("输入信息不完整");
        return false;
    }
    if(p1!= p2){
        alert("两次输入密码不匹配！");
        return false;
    }
    return true;
}
var register = function(){
    var loginDiv = document.getElementById("login");
    loginDiv.style.display = "none";
    var registerDiv =document.getElementById("register");
    registerDiv.style.display = "block";
}
var backToLogin = function(){
    var loginDiv = document.getElementById("login");
    loginDiv.style.display = "block";
    var registerDiv =document.getElementById("register");
    registerDiv.style.display = "none";
}

setTimeout(function(){

},10);
/**
 * Created by wgw on 2017/2/9.
 */
var checkSubmit = function() {
    var identity = $("input[name='chooseID1']:checked").val();
    if(identity == ""){
        alert("请选择身份");
        return false;
    }
    var userName = document.getElementById("loginName").value;
    localStorage.setItem( "ID",userName);
    console.log(localStorage.ID);


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
    var identity = $("input[name='chooseID2']:checked").val();
    var uN = document.getElementById("loginNameR").value;
    var p1 = document.getElementById("passwordR1").value;
    var p2 = document.getElementById("passwordR2").value;
    if(uN == ""||p1 == ""||p2 == ""||identity == ""){
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
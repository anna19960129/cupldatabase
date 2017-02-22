/**
 * Created by samsung2014 on 2017/2/22.
 */

var database = require("../databaseManager").getInstance();
var connection = database.getConnection();

register = function(){
}

register.post = function(req,res,next){
    //服务器端的数据获取方式与浏览器端不同。
    //数据都储存在req变量中。
    //如果是form直接提交的话，那么在form里面，每个input都对应着一个数据
    //想要获取这个数据的话，不是靠id,而是靠它的的name
    //这是针对form表单直接提交的方式（也就是input type = "submit"
    //如果是用了json提交的话
    //那么获得提交对象的方式，是var a = req.body.(json里面的变量名）
    var userName= req.body.name;
    var passWord = req.body.r1password;
    if(!registerCheck(userName,passWord)){
        res.redirect('/reLogin');
    };
    //var userName = document.getElementById("loginNameR");
    //var passWord =document.getElementById("PasswordR1");
    connection.query("insert into login values('" + userName + "','" + passWord + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/index');
        } else{
            res.redirect("/reLogin");
        }
    });
}

function registerCheck(userName,passWord){
    //就算在前端验证过了用户名和密码标准，在后台也要重新验证一遍
    //这里简化了一下，直接返回正确
    return true;
}




module.exports = register;

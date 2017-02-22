/**
 * Created by samsung2014 on 2017/2/22.
 */

var database = require("../databaseManager").getInstance();
var connection = database.getConnection();

register = function(){

}

register.get = function(req,res,next){
    console.log("获取注册页面");
    res.render('index');
}



register.mainPort =function(req,res,next){
    console.log("mainPort");
    res.redirect("/register");
}

register.post = function(req,res,next){
    var userName = document.getElementById("loginNameR");
    var passWord =document.getElementById("PasswordR1");
    connection.query("insert into login(name,password) values(''" +userName + "'',''" + passWord + "'')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/index');
        } else{
            res.redirect("/reRegister");
        }
    });
}





module.exports = register;

/**
 * Created by wgw on 2017/2/7.
 */
var database = require("../databaseManager").getInstance();
var connection = database.getConnection();

login = function(){

}

login.get = function(req,res,next){
    console.log("获取登录页面");
    res.render('index');
}

login.reLoginGet = function(req,res,next){
    res.render("reLogin");
}

login.mainPort =function(req,res,next){
    console.log("mainPort");
    res.redirect("/login");
}

login.post = function(req,res,next){
    var userName = req.body.name;
    var password = req.body.password;
    if(!connection){res.redirect("/reLogin")};

    connection.query('select password from login where name="'+userName+'"', function(err, rows, fields) {
        if (err) throw err;
        var result =  rows[0].password;
        console.log(result);
        if(result == password){
            req.session.userId = "haha";
            res.redirect('/main');
        }else{
            res.redirect("/reLogin");
        }
    });
}

login.logout = function(req,res,next){
    console.log("退出登录");
    req.session.destroy(function(err) {
        if(err){
            res.json({ret_code: 2, ret_msg: '退出登录失败'});
            return;
        }
        res.clearCookie("sKey");
        res.redirect('/login');
    });
}

module.exports = login;
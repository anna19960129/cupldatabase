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
    var identity = req.body.chooseID1;
    console.log(req.body);
    if(!connection){res.redirect("/reLogin")};
    if(identity=="student"){
        connection.query('select password from login where name="'+userName+'"', function(err, rows, fields) {
            if (err) throw err;
            if(!rows.length){
                res.redirect("/reLogin");
                return;
            }
            var result =  rows[0].password;
            if(result == password){
                req.session.userId = "haha";
                res.redirect('/main');
            }else{
                res.redirect("/reLogin");
            }
        });
    }else{
        connection.query('select password from login_teacher where name="'+userName+'"', function(err, rows, fields) {
            if (err) throw err;
            if(!rows.length){
                res.redirect("/reLogin");
                return;
            }
            var result =  rows[0].password;
            if(result == password){
                req.session.userId = "haha";
                res.redirect('/search');
            }else{
                res.redirect("/reLogin");
            }
        });
    }
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


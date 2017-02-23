/**
 * Created by wgw on 2017/2/8.
 */


////查询
//connection.query('select * from `mytable`', function(err, rows, fields) {
//    if (err) throw err;
//    console.log('The solution is: ', rows);
//});

var database = require("../databaseManager").getInstance();
var connection = database.getConnection();

main = function(){

}

main.get = function(req,res,next){
    console.log("mainGet");
    if(!req.session.userId){
        console.log("还没登录！转到登录页面");
        res.redirect("/login");
    }else{
        console.log("已经登录了！");
        res.render("main");
    }

}

main.KYXMInfoPost = function(req,res,next){
    //console.log 命令可以在控制台输出指定的数据，如果你不确定req.body里面有什么，可以用
    //console.log命令输出看一下。
    console.log(req.body);
    var projectName=req.body.projectName;
    var time=req.body.time;
    var level=req.body.level;
    var personName=req.body.personName;
    var personID=req.body.personID;
    var teacher=req.body.teacher;
    connection.query("insert into KYXM values('" +projectName + "','" + time + "','" + level + "','" + personName + "','" + personID + "','" + teacher + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/main');
        } else{
            res.redirect("/main");
        }
    });
}



module.exports = main;

KYXMInfo=function(){

}
KYXMInfo.post = function(req,res,next){
    var projectName=req.body.KYXMInfo.projectName;
    var time=req.body.KYXMInfo.time;
    var level=req.body.KYXMInfo.level;
    var personName=req.body.KYXMInfo.personName;
    var personID=req.body.KYXMInfo.personID;
    var teacher=req.body.KYXMInfo.teacher;
    connection.query("insert into KYXM values('" +projectName + "','" + time + "','" + level + "','" + personName + "','" + personID + "','" + teacher + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/main');
        } else{
            res.redirect("/remain");
        }
    });
}
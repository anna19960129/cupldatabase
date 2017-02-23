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

main.post = function(req,res,next){
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



module.exports = main;
/**
 * Created by wgw on 2017/2/8.
 */


////查询
//connection.query('select * from `mytable`', function(err, rows, fields) {
//    if (err) throw err;
//    console.log('The solution is: ', rows);
//});


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
}

module.exports = main;
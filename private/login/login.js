/**
 * Created by wgw on 2017/2/7.
 */

login = function(){

}

login.get = function(req,res,next){
    console.log("获取登录页面");
    res.render('index');
}

login.mainPort =function(req,res,next){
    console.log("mainPort");
    res.redirect("/login");
}

login.post = function(req,res,next){
    console.log("loginPost");
    req.session.userId = "haha";
    res.redirect('/main');
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
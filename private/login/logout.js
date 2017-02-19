/**
 * Created by wgw on 2017/2/9.
 */
logout = function(){

}

logout.get = function(req,res,next){
    console.log("退出页面");
    res.render('logout');
}

logout.ajaxGet = function(req,res,next){
    console.log("退出请求");
    res.json({success:1});
}

logout.post = function(req,res,next){
}

module.exports = logout;
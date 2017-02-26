var debug = require('debug')('qx-chat');
var app = require('./app');
var login = require('./private/login/login');
var register = require('./private/register/register');
var logout = require('./private/login/logout');
var main = require('./private/main/main');
var search=require('./private/search/search');

app.set('port',18080);
var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});


app.get("/index",login.get);
app.get("/login",login.get);
app.get("/reLogin",login.reLoginGet);
app.get("/logout",logout.get);
app.get("/ajax/logout",logout.ajaxGet);
app.get("/main",main.get);

app.post("/login",login.post);
app.post("/register",register.post);
app.post("/logout",logout.post);
//app.post 函数有两个参数，第一个参数“ajax/KYXMInfoSubmit"表示了路径
//第二个参数main.KYXMInfoPost表示用哪个函数来处理你传递来的数据
//像你最初写的，KYXM.post的话，其实并没有这个函数吖，所以没法
//处理。你定义的处理函数放在了main里面，所以第二个参数是main.KYXMInfoPost
app.post("/ajax/bIInfoSubmit",main.bIInfoPost);
app.post("/ajax/cptInfoSubmit",main.cptInfoPost);
app.post("/ajax/CXCYInfoSubmit",main.CXCYInfoPost);
app.post("/ajax/KYXMInfoSubmit",main.KYXMInfoPost);
app.post("/ajax/paperInfoSubmit",main.paperInfoPost);
app.post("/ajax/bIInfoSearch",search.bIInfoPost);

var debug = require('debug')('qx-chat');
var app = require('./app');
var login = require('./private/login/login');
var register = require('./private/register/register');
var logout = require('./private/login/logout');
var main = require('./private/main/main');

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
//需要在这里添加响应！
app.post("/register",register.post);
app.post("/logout",logout.post);
app.post("/ajax/KYXMInfoSubmit",KYXMInfo.post);

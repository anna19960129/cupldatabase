var debug = require('debug')('qx-chat');
var app = require('./app');
var login = require('./private/login/login');
var logout = require('./private/login/logout');
var main = require('./private/main/main');

app.set('port',18080);
var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});

app.use(function(req,res,next){
    //console.log("haha");
    next();
})


app.get("/index",login.get);
app.get("/login",login.get);
app.get("/logout",logout.get);
app.get("/ajax/logout",logout.ajaxGet);
//app.get("",login.mainPort);
app.get("/main",main.get);

app.post("/login",login.post);
app.post("/logout",logout.post);

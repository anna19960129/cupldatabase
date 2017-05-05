/**
 * Created by wgw on 2017/2/21.
 */

var mysql = require('mysql');
var connectionProp = {
    host: 'localhost',
    port:"3305",
    user: 'root',
    password: 'mysql',
    database:'test'
};

var connection;
var pool = mysql.createPool(connectionProp);
//pool.getConnection(function(err,con){
//    if(err) {
//        console.log(err);
//    } else {
//        console.log("initSuc");
//        connection = con;
//    }
//});
var instance = null;

/**
 * 数据库管理类
 */
dataBase = function(){
    this.setOK = true;
    this.connection = null;
    this.isConnected = false;
    this.init();
}

dataBase.prototype = {
    init:function(){
        var self = this;
        if(!this.setOK)return;
        checkConnection();
        function checkConnection(){
            if(!pool){
                console.log("notInitYet");
                setTimeout(function(){
                    checkConnection();
                },1);
                return 0;
            }
            console.log("right=============================");
            //connection.connect();
            self.connection = pool;
            instance = self;
            self.isConnected = true;
        }

    },
    connect:function(){
        this.connection.connect();
        this.isConnected = true;
    },
    disConnect:function(){
        if(!this.connection){return null};
        this.connection.end();
        this.isConnected = false;
    },
    getConnection:function(){
        return this.connection;
    }
}

exports.getInstance = function(){
    if(!instance){
        instance = new dataBase();
    }
    return instance;
}




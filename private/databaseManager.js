/**
 * Created by wgw on 2017/2/21.
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port:"3305",
    user: 'root',
    password: 'mysql',
    database:'test'
});
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
        if(!this.setOK)return;
        connection.connect();
        this.connection = connection;
        this.isConnected = true;
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




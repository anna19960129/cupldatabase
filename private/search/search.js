/**
 * Created by samsung2014 on 2017/2/26.
 */
var database = require("../databaseManager").getInstance();
var connection = database.getConnection();

search=function(){
}
search.get = function(req,res,next){
    res.render('search');
};
search.bIInfoPost=function(req,res,next){
    console.log(req.body);
    var queryStr = generateQuery(req.body);
    var finalStr = 'select * from basicinformation WHERE ' + queryStr;
    console.log(finalStr);
    connection.query(finalStr,
        function(err, rows, fields) {
        if (err) throw err;
        if(!rows.length){
            console.log("没有查到数据");
            res.json({dataType:"noData"});
            return;
        }else{
            console.log("查到数据了");
            //for (var i = 0; i < rows.length; i++) {
            //    arr[i] = rows[i].name;
            //}
            res.json({
                dataType:"hasData",
                data:rows
            })
            return;
        }
    });
};
search.cptInfoPost=function(req,res,next){
    console.log(req.body);
    var queryStr = generateQuery(req.body);
    var finalStr = 'select * from competition WHERE ' + queryStr;
    console.log(finalStr);
    connection.query(finalStr,
        function(err, rows, fields) {
            if (err) throw err;
            if(!rows.length){
                console.log("没有查到数据");
                res.json({dataType:"noData"});
                return;
            }else{
                console.log("查到数据了");
                //for (var i = 0; i < rows.length; i++) {
                //    arr[i] = rows[i].name;
                //}
                res.json({
                    dataType:"hasData",
                    data:rows
                })
                return;
            }
        });
};

function generateQuery(info){
    var str = " ";
    var argList = [];
    for(var argsName in info){
        var arg_i = info[argsName];
        if(arg_i != ""){
            switch(argsName){
                case "Name":
                    name = "姓名";
                    break;
                case "ID":
                    name = "ID";
                    break;
                case "gender":
                    name = "性别";
                    break;
                case "birthday":
                    name = "出生年月";
                    break;
                case "enrol_major":
                    name="入学专业";
                    break;
                case"enrolTimeList":
                    name="入学时间";
            }
            argList.push( "`" + name + "` in (\"" + arg_i + "\")");
        }
    }
    for(var i = 0;i<argList.length;i++){
        str += argList[i];
        if(i != (argList.length-1)){
            str += " and "
        }
    }
    return str;
}

module.exports = search;
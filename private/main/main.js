/**
 * Created by wgw on 2017/2/8.
 */

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

main.bIInfoPost = function(req,res,next) {
    console.log(req.body);
    var name = req.body.Name;
    var ID = req.body.ID;
    var gender = req.body.gender;
    var birthday = req.body.birthday;
    var province = req.body.province;
    var gk_sort = req.body.gk_sort;
    var math = req.body.math || "noData";
    var english = req.body.english || "noData";
    var enrol = req.body.enrol;
    var enrol_major = req.body.enrol_major;
    var change_major = req.body.change_major;
    var present_major = req.body.present_major;
    var double_major = req.body.double_major;
    var second_major = req.body.second_major;
    var minor = req.body.minor;
    var minor_program = req.body.minor_program;
    var cellphone = req.body.cellphone;
    var weChat = req.body.weChat || "noData";
    var email = req.body.email;
    var graduate = req.body.graduate || "noData";
    var no_graduate_reason = req.body.no_graduate_reason || "noData";
    var finalPaper = req.body.finalPaper || "noData";
    var afterGraduate = req.body.afterGraduate;
    var postgraduate = req.body.postgraduate || "noData";
    var postgraduate_major = req.body.postgraduate_major;
    var postgraduate_other_major = req.body.postgraduate_other_major || "noData";
    var doctor = req.body.doctor || "noData";
    var doctor_major = req.body.doctor_major;
    var doctor_other_major = req.body.doctor_other_major || "noData";
    var post_doctor = req.body.post_doctor || "noData";
    var post_doctor_major = req.body.post_doctor_major;
    var post_doctor_other_major = req.body.post_doctor_other_major || "noData";
    var job = req.body.job || "noData";
    var job_sort = req.body.job_sort;
    var department = req.body.department || "noData";
    var department_sort = req.body.department_sort;
    var tech_position = req.body.tech_position || "noData";
    var administrative_function = req.body.administrative_function || "noData";
    connection.query('select * from basicInformation WHERE  basicInformation.ID in  (\"' + ID + '\" )',
        function (err, rows, fields) {
            if (err) throw err;
            console.log(rows);
            if (!rows.length) {
                console.log("没有查到数据");
                connection.query("insert into basicInformation values('" + name + "','" + ID + "','" + gender + "','" +
                    birthday + "','" + province + "','" + gk_sort + "','" + math + "','" + english + "','" + enrol + "','" +
                    enrol_major + "','" + change_major + "','" + present_major + "','" + double_major + "','" + second_major +
                    "','" + minor + "','" + minor_program + "','" + cellphone + "','" + weChat + "','" + email + "','" +
                    graduate + "','" + no_graduate_reason + "','" + finalPaper + "','" + afterGraduate + "','" + postgraduate + "','" +
                    postgraduate_major + "','" + postgraduate_other_major + "','" + doctor + "','" + doctor_major + "','" + doctor_other_major
                    + "','" + post_doctor + "','" + post_doctor_major + "','" + post_doctor_other_major + "','" + job + "','" + job_sort + "','" + department + "','" +
                    department_sort + "','" + tech_position + "','" +
                    administrative_function + "')",
                    function (err, result, fields) {
                        if (err) {
                            console.log("数据没有放入数据库" + err);
                            res.redirect('/main');
                            return;
                        }
                        if (!result.affectedRows) {
                            console.log("未传输成功");
                            res.redirect('/main');
                            return;
                        }
                        if (result.affectedRows == 1) {
                            console.log("填写成功");
                            req.session.name = "haha";
                            var queryStr = req.body.ID;
                            var finalStr = 'select * from basicInformation WHERE  basicInformation.ID in  (\"' + queryStr + '\" )';
                            console.log(finalStr);
                            connection.query(finalStr,
                                function (err, rows, fields) {
                                    if (err) throw err;
                                    console.log(rows);
                                    if (!rows.length) {
                                        console.log("没有查到数据");
                                        res.json({dataType: "noData"});
                                        return;
                                    } else {
                                        console.log("查到数据了");
                                        res.json({
                                            dataType: "hasData",
                                            data: rows
                                        })
                                        return;
                                    }
                                }
                            );
                            return;
                        } else {
                            console.log("已有此条记录");
                            res.redirect("/main");
                            return;
                        }
                    }
                );
                return;
            } else {
                console.log("查到数据了");
                connection.query('delete from basicInformation  WHERE  basicInformation.ID in  (\"' + ID + '\" )',
                    function (err, result, fields) {
                        if (err) throw err;
                        console.log(rows);
                        if (!result.affectedRows) {
                            console.log("未删除成功");
                            res.redirect('/main');
                            return;
                        }
                        if (result.affectedRows == 1) {
                            console.log("删除成功");
                            req.session.name = "haha";
                            connection.query("insert into basicInformation values('" + name + "','" + ID + "','" + gender + "','" +
                                birthday + "','" + province + "','" + gk_sort + "','" + math + "','" + english + "','" + enrol + "','" +
                                enrol_major + "','" + change_major + "','" + present_major + "','" + double_major + "','" + second_major +
                                "','" + minor + "','" + minor_program + "','" + cellphone + "','" + weChat + "','" + email + "','" +
                                graduate + "','" + no_graduate_reason + "','" + finalPaper + "','" + afterGraduate + "','" + postgraduate + "','" +
                                postgraduate_major + "','" + postgraduate_other_major + "','" + doctor + "','" + doctor_major + "','" + doctor_other_major
                                + "','" + post_doctor + "','" + post_doctor_major + "','" + post_doctor_other_major + "','" + job + "','" + job_sort + "','" + department + "','" +
                                department_sort + "','" + tech_position + "','" +
                                administrative_function + "')",
                                function (err, result, fields) {
                                    if (err) {
                                        console.log("数据没有放入数据库" + err);
                                        res.redirect('/main');
                                        return;
                                    }
                                    if (!result.affectedRows) {
                                        console.log("未传输成功");
                                        res.redirect('/main');
                                        return;
                                    }
                                    if (result.affectedRows == 1) {
                                        console.log("填写成功");
                                        req.session.name = "haha";
                                        var queryStr = req.body.ID;
                                        var finalStr = 'select * from basicInformation WHERE  basicInformation.ID in  (\"' + queryStr + '\" )';
                                        console.log(finalStr);
                                        connection.query(finalStr,
                                            function (err, rows, fields) {
                                                if (err) throw err;
                                                console.log(rows);
                                                if (!rows.length) {
                                                    console.log("没有查到数据");
                                                    res.json({dataType: "noData"});
                                                    return;
                                                } else {
                                                    console.log("查到数据了");
                                                    res.json({
                                                        dataType: "hasData",
                                                        data: rows
                                                    })
                                                    return;
                                                }
                                            }
                                        );
                                        return;
                                    } else {
                                        console.log("已有此条记录");
                                        res.redirect("/main");
                                        return;
                                    }
                                }
                            );
                            return;
                        } else {
                            console.log("已有此条记录");
                            res.redirect("/main");
                            return;
                        }
                    }
                );
                return;
            }
        }
    );
}




main.cptInfoPost = function(req,res,next) {
    console.log(req.body);
    var personName = req.body.personName;
    var ID = req.body.personID;
    var level = req.body.level;
    var cptName = req.body.cptName||req.body.cptOtherName;
    var cptOtherName =req.body.cptOtherName;
    var time = req.body.time;
    var grade = req.body.grade;
    var form = req.body.form;
    var leader=req.body.leader;
    var leader_name = req.body.leader_name||req.body.personName;
    var memberList = req.body.memberList;
    connection.query(
        "insert into competition values('" +personName + "','" + ID + "','" + level + "','" +
        cptName + "','" + cptOtherName + "','" + time + "','" + grade + "','" + form + "','" + leader + "','" + leader_name + "','" +
        memberList + "')",
        function(err,result,fields){
            if(err){
                console.log("数据没有放入数据库" + err);
                res.redirect('/main');
                return;
            }
            if(!result.affectedRows){
                console.log("未传输成功");
                res.redirect('/main');
                return;
            }
            if(result.affectedRows==1){
                console.log("填写成功");
                req.session.name="haha";
                var finalStr = 'select * from competition WHERE  competition.ID in  (\"' + ID+'\" )';
                console.log(finalStr);
                connection.query(finalStr,
                    function(err,rows, fields) {
                        if (err) throw err;
                        console.log(rows);
                        if(!rows.length){
                            console.log("没有查到数据");
                            res.json({dataType:"noData"});
                            return;
                        }else{
                            console.log("查到数据了");
                            res.json({
                                dataType:"hasData",
                                data:rows
                            })
                            return;
                        }
                    }
                );
                return;
            } else{
                console.log("已有此条记录");
                res.redirect("/main");
                return;
            }
        }
    );
}

main.CXCYInfoPost=function(req,res,next){
    console.log(req.body);
    var projectName=req.body.projectName;
    var projectTime=req.body.projectTime;
    var projectLevel=req.body.projectLevel;
    var projectSort=req.body.projectSort;
    var studentName=req.body.studentName;
    var ID=req.body.studentID;
    var teacherName=req.body.teacherName;
    var duty=req.body.duty;
    var Leader=req.body.Leader||req.body.studentName;
    var MemberList=req.body.MemberList;
    connection.query(
        "insert into CXCY values('" +projectName + "','" + projectTime + "','" + projectLevel + "','" +
        projectSort + "','" + studentName + "','" + ID + "','" + teacherName + "','" + duty + "','" +
        Leader + "','" + MemberList + "')",
        function(err,result,fields){
            if(err){
                console.log("数据没有放入数据库" + err);
                res.redirect('/main');
                return;
            }
            if(!result.affectedRows){
                console.log("未传输成功");
                res.redirect('/main');
                return;
            }
            if(result.affectedRows==1){
                console.log("填写成功");
                req.session.name="haha";
                var finalStr = 'select * from CXCY WHERE  CXCY.ID in  (\"' + ID+'\" )';
                console.log(finalStr);
                connection.query(finalStr,
                    function(err,rows, fields) {
                        if (err) throw err;
                        console.log(rows);
                        if(!rows.length){
                            console.log("没有查到数据");
                            res.json({dataType:"noData"});
                            return;
                        }else{
                            console.log("查到数据了");
                            res.json({
                                dataType:"hasData",
                                data:rows
                            })
                            return;
                        }
                    }
                );
                return;
            } else{
                console.log("已有此条记录");
                res.redirect("/main");
                return;
            }
        }
    );
}

main.KYXMInfoPost = function(req,res,next){
    console.log(req.body);
    var projectName=req.body.projectName;
    var time=req.body.time;
    var level=req.body.level;
    var personName=req.body.personName;
    var ID=req.body.personID;
    var teacher=req.body.teacher;
    connection.query(
        "insert into KYXM values('" +projectName + "','" + time + "','" + level + "','" +
        personName + "','" + ID + "','" + teacher + "')",
        function(err,result,fields){
        if(err){
            console.log("数据没有放入数据库" + err);
            res.redirect('/main');
            return;
        }
        if(!result.affectedRows){
            console.log("未传输成功");
            res.redirect('/main');
            return;
        }
        if(result.affectedRows==1){
            console.log("填写成功");
            req.session.name="haha";
            var finalStr = 'select * from KYXM WHERE  KYXM.ID in  (\"' + ID+'\" )';
            console.log(finalStr);
            connection.query(finalStr,
                function(err,rows, fields) {
                    if (err) throw err;
                    console.log(rows);
                    if(!rows.length){
                        console.log("没有查到数据");
                        res.json({dataType:"noData"});
                        return;
                    }else{
                        console.log("查到数据了");
                        res.json({
                            dataType:"hasData",
                            data:rows
                        })
                        return;
                    }
                }
            );
            return;
        } else{
            console.log("已有此条记录");
            res.redirect("/main");
            return;
        }
        }
    );
}

main.paperInfoPost=function(req,res,next){
    console.log(req.body);
    var paperName = req.body.paperName;
    var Name = req.body.Name;
    var ID = req.body.ID;
    var authorType = req.body.authorType||"noData";
    var authorSingle = req.body.authorSingle||"noData";
    var isFirstAuthor = req.body.isFirstAuthor||"noData";
    var firstAuthor = req.body.firstAuthor||"noData";
    var coAuthorList = req.body.coAuthorList;
    var teacherName = req.body.teacherName;
    var magazineName = req.body.magazineName;
    var publishTime = req.body.publishTime;
    connection.query(
        "insert into paper values('" +paperName + "','" + Name + "','" + ID + "','" + authorType + "','" +
        authorSingle + "','" + isFirstAuthor + "','" + firstAuthor + "','" + coAuthorList + "','" + teacherName + "','" +
        magazineName + "','" + publishTime + "')",
        function(err,result,fields){
            if(err){
                console.log("数据没有放入数据库" + err);
                res.redirect('/main');
                return;
            }
            if(!result.affectedRows){
                console.log("未传输成功");
                res.redirect('/main');
                return;
            }
            if(result.affectedRows==1){
                console.log("填写成功");
                req.session.name="haha";
                var queryStr = req.body.ID;
                var finalStr = 'select * from paper WHERE  paper.ID in  (\"' + queryStr+'\" )';
                console.log(finalStr);
                connection.query(finalStr,
                    function(err,rows, fields) {
                        if (err) throw err;
                        console.log(rows);
                        if(!rows.length){
                            console.log("没有查到数据");
                            res.json({dataType:"noData"});
                            return;
                        }else{
                            console.log("查到数据了");
                            res.json({
                                dataType:"hasData",
                                data:rows
                            })
                            return;
                        }
                    }
                );
                return;
            } else{
                console.log("已有此条记录");
                res.redirect("/main");
                return;
            }
        }
    );

}




module.exports = main;


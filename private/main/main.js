/**
 * Created by wgw on 2017/2/8.
 */


////查询
//connection.query('select * from `mytable`', function(err, rows, fields) {
//    if (err) throw err;
//    console.log('The solution is: ', rows);
//});

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

main.bIInfoPost = function(req,res,next){
    console.log(req.body);
    var name=req.body.Name;
    var ID=req.body.ID;
    var gender=req.body.gender;
    var birthday=req.body.birthday;
    var province=req.body.province;
    var gk_sort=req.body.gk_sort;
    var math=req.body.math;
    var english=req.body.english;
    var enrol=req.body.enrol;
    var enrol_major=req.body.enrol_major;
    var change_major=req.body.change_major;
    var present_major=req.body.present_major;
    var double_major=req.body.double_major;
    var second_major=req.body.second_major;
    var minor=req.body.minor;
    var minor_program=req.body.minor_program;
    var cellphone=req.body.cellphone;
    var weChat=req.body.weChat;
    var email=req.body.email;
    var graduate=req.body.graduate;
    var no_graduate_reason=req.body.no_graduate_reason;
    var finalPaper=req.body.finalPaper;
    var afterGraduate=req.body.afterGraduate;
    var postgraduate=req.body.postgraduate;
    var postgraduate_major=req.body.postgraduate_major;
    var doctor=req.body.doctor;
    var doctor_major=req.body.doctor_major;
    var post_doctor=req.body.post_doctor;
    var post_doctor_major=req.body.post_doctor_major;
    var job=req.body.job;
    var job_sort=req.body.job_sort;
    var department=req.body.department;
    var department_sort=req.body.department_sort;
    var tech_position=req.body.tech_position;
    var administrative_function=req.body.administrative_function;
    connection.query("insert into basicInformation values('" +name + "','" + ID + "','" + gender + "','" + birthday + "','" + province + "','" + gk_sort + "','" + math + "','" + english + "','" + enrol + "','" + enrol_major + "','" + change_major + "','" + present_major + "','" + double_major + "','" + second_major + "','" + minor + "','" + minor_program + "','" + cellphone + "','" + weChat + "','" + email + "','" + graduate + "','" + no_graduate_reason + "','" + finalPaper + "','" + afterGraduate + "','" + postgraduate + "','" + postgraduate_major + "','" + doctor + "','" + doctor_major + "','" + post_doctor + "','" + post_doctor_major + "','" + job + "','" + job_sort + "','" + department + "','" + department_sort + "','" + tech_position + "','" + administrative_function + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/main');

        } else{
            res.redirect("/main");

        }
    });

}

main.cptInfoPost = function(req,res,next) {
    console.log(req.body);
    var personName = req.body.personName;
    var personID = req.body.personID;
    var level = req.body.level;
    var cptName = req.body.cptName;
    var time = req.body.time;
    var grade = req.body.grade;
    var form = req.body.form;
    var leader=req.body.leader;
    var leader_name = req.body.leader_name;
    var memberList = req.body.memberList;
    connection.query("insert into competition values('" +personName + "','" + personID + "','" + level + "','" + cptName + "','" + time + "','" + grade + "','" + form + "','" + leader + "','" + leader_name + "','" + memberList + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/main');
        } else{
            res.redirect("/main");
        }
    });
}

main.CXCYInfoPost=function(req,res,next){
    console.log(req.body);
    var projectName=req.body.projectName;
    var projectTime=req.body.projectTime;
    var projectLevel=req.body.projectLevel;
    var projectSort=req.body.projectSort;
    var studentName=req.body.studentName;
    var studentID=req.body.studentID;
    var teacherName=req.body.teacherName;
    var duty=req.body.duty;
    var Leader=req.body.Leader;
    var MemberList=req.body.MemberList;
    connection.query("insert into CXCY values('" +projectName + "','" + projectTime + "','" + projectLevel + "','" + projectSort + "','" + studentName + "','" + studentID + "','" + teacherName + "','" + duty + "','" + Leader + "','" + MemberList + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/main');
        } else{
            res.redirect("/main");
        }
    });
}

main.KYXMInfoPost = function(req,res,next){
    //console.log 命令可以在控制台输出指定的数据，如果你不确定req.body里面有什么，可以用
    //console.log命令输出看一下。
    console.log(req.body);
    var projectName=req.body.projectName;
    var time=req.body.time;
    var level=req.body.level;
    var personName=req.body.personName;
    var personID=req.body.personID;
    var teacher=req.body.teacher;
    connection.query("insert into KYXM values('" +projectName + "','" + time + "','" + level + "','" + personName + "','" + personID + "','" + teacher + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/main');
        } else{
            res.redirect("/main");
        }
    });
}

main.paperInfoPost=function(req,res,next){
    console.log(req.body);
    var paperName = req.body.paperName;
    var Name = req.body.Name;
    var ID = req.body.ID;
    var authorType = req.body.authorType;
    var authorSingle = req.body.authorSingle;
    var isFirstAuthor = req.body.isFirstAuthor;
    var firstAuthor = req.body.firstAuthor;
    var coAuthorList = req.body.coAuthorList;
    var teacherName = req.body.teacherName;
    var magazineName = req.body.magazineName;
    var publishTime = req.body.publishTime;

    connection.query("insert into paper values('" +paperName + "','" + Name + "','" + ID + "','" + authorType + "','" + authorSingle + "','" + isFirstAuthor + "','" + firstAuthor + "','" + coAuthorList + "','" + teacherName + "','" + magazineName + "','" + publishTime + "')",function(err,result){
        if(result.affectedRows==1){
            req.session.name="haha";
            res.redirect('/main');
        } else{
            res.redirect("/main");
        }
    });
}

module.exports = main;


/**
 * Created by samsung2014 on 2017/2/17.
 */

function cptShow(){
    var cpt = document.getElementById("cptInfo_name");
    if (cpt.value=="其他"){
        document.getElementById("cptInfo_name_other").style.display="block";
    }
    else{
        document.getElementById("cptInfo_name_other").style.display="none";
    }
}


function display_cpt1() {
    var multiAuthors = document.getElementsByClassName("cptInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
        document.getElementById("cptInfoTableLeader").style.display = "none";
    }
}
function display_cpt2() {
    var multiAuthors = document.getElementsByClassName("cptInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
    }
}
var cptCount=1;

function cpt_add() {
    var element = document.createElement("tr");
    //表格的一行还包括了两列，所以必须要把列结构也添上
    //如果没有td的话，所有的内容都会挤占在默认的第一列
    //会让你感觉到都在左边
    var td1 = document.createElement("td");
    var node = document.createTextNode("其他组员");
    td1.appendChild(node);
    var td2 = document.createElement("td");
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    cptCount++;
    inp.id='cpt_member'+ cptCount;
    td2.appendChild(inp);
    element.appendChild(td1);
    element.appendChild(td2);
    //这里指定了在table的最后一行前面添加一行
    var table = document.getElementById("cptInfoTable");
    table.appendChild(element);
}

function cpt_del() {
    var element = document.getElementById("cptInfoTable");
    if(element.rows.length>11){
        element.deleteRow(element.rows.length-1);
    }
}

function createCpt(){
    var element = document.getElementById("cptInfoForm");
    element.style.display = "";
}


//提交竞赛
function cptSubmit(){
    var cptInfo = {};
    //获取数据==========================================================================================================
    //姓名学号
    var personName = document.getElementById("cptInfo_personName").value;
    var personID = document.getElementById("cptInfo_personID").value;
    //竞赛级别
    var level = document.getElementById("cptInfo_level").value;
    //竞赛名称
    var cptName = document.getElementById("cptInfo_name").value;
    //获奖时间
    var time = document.getElementById("cpt_time").value;
    //获奖等级
    var grade = document.getElementById("cpt_grade").value;
    //竞赛形式(cpt_single/cpt_multiple)
    var form = $("input[name='cpt_form']:checked").val();
    //是否为组长(leader/member)
    var leader = $("input[name='cpt_leader']:checked").val();
    //组长
    var leader_name = document.getElementById("cpt_leader_name").value;
    //组员1
    var member1 = document.getElementById("cpt_member1").value;
    //组员2
    var member2 = document.getElementById("cpt_member2").value;
    //组员3
    var member3 = document.getElementById("cpt_member3").value;
    //组员4
    var member4 = document.getElementById("cpt_member4").value;
    //组员5
    var member5 = document.getElementById("cpt_member5").value;
    //组员6
    var member6 = document.getElementById("cpt_member6").value;
    //组员7
    var member7 = document.getElementById("cpt_member7").value;
    //组员8
    var member8 = document.getElementById("cpt_member8").value;
    //组员9
    var member9 = document.getElementById("cpt_member9").value;
    //生成合作者列表
    var memberList = [];
    if(member1 != ""){memberList.push(member1)};
    if(member2 != ""){memberList.push(member2)};
    if(member3 != ""){memberList.push(member3)};
    if(member4 != ""){memberList.push(member4)};
    if(member5 != ""){memberList.push(member5)};
    if(member6 != ""){memberList.push(member6)};
    if(member7 != ""){memberList.push(member7)};
    if(member8 != ""){memberList.push(member8)};
    if(member9 != ""){memberList.push(member9)};
    //数据检查==========================================================================================================
    //先检查必填的内容
    if(personName == "" || personID ==""||level == ""||cptName == ""|| time == ""|| grade == ""||form== ""){
        alert("信息不完善，请补全!");
    }
    //再根据填写的内容进行检查
    if(leader == "leader"){
        if(memberList.length == 0){
            alert("信息不完善，请补全!");
        }
    }else{
        if(leader_name == ""||memberList.length == 0){
            alert("信息不完善，请补全!");
        }
    }
    //生成数据==========================================================================================================
    cptInfo.personName = personName;
    cptInfo.personID = personID;
    cptInfo.level = level;
    cptInfo.cptName= cptName;
    cptInfo.time = time;
    cptInfo.grade=  grade;
    cptInfo.form=  form;
    if (cptInfo.leader == "leader") {
        cptInfo.leader_name = personName;
        cptInfo.leader = leader;
        cptInfo.memberList = memberList;
    } else {
        cptInfo.leader = leader;
        cptInfo.leader_name = leader_name;
        cptInfo.memberList = memberList;
    }



    //提交数据==========================================================================================================
    $.ajax({
        url:"/ajax/cptInfoSubmit",
        type:"POST",
        dataType:"json",
        data:{cptInfo:cptInfo},
        success:function(data){
            console.log(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}
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
    var cptOtherName=document.getElementById("cptInfo_name_other").value;
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
    //因为组员数据不是定长的，所以没法直接取值
    var memberList ="";
    for(var i= 1;i<20;i++){
        if(memberList != ""){memberList+=";"}
        var name = "cpt_member" + i;
        var obj = document.getElementById(name);
        if(!obj)break;
        memberList += obj.value;
    }
    if(i >=20){
        alert("超出了最大组员数！");
        return;
    }

    //数据检查==========================================================================================================
    //先检查必填的内容
    if(personName == "" || personID ==""||level == ""||cptName == ""|| time == ""|| grade == ""||form== ""){
        alert("信息不完善，请补全!");
        return;
    }
    //再根据填写的内容进行检查
    if(form != "cpt_single"){
        if(leader == "leader"){
            if(memberList == ""){
                alert("信息不完善，请补全!");
                return;
            }
        }else{
            if(leader_name == ""||memberList == ""){
                alert("信息不完善，请补全!");
                return;
            }
        }
    }

    //生成数据==========================================================================================================
    cptInfo.personName = personName;
    cptInfo.personID = personID;
    cptInfo.level = level;
    cptInfo.cptOtherName = cptOtherName;
    if(cptName =="其他"){
        cptInfo.cptName = "";
    }else{
        cptInfo.cptName = cptName;
    }
    cptInfo.time = time;
    cptInfo.grade=  grade;
    cptInfo.form=  form;
    cptInfo.leader = leader||"noData";
    if (leader == "leader") {
        cptInfo.leader_name == personName;
    } else {
        cptInfo.leader_name = leader_name;
    }
    cptInfo.memberList = memberList;

    //提交数据==========================================================================================================
    $.ajax({
        url:"/ajax/cptInfoSubmit",
        type:"POST",
        dataType:"json",
        data:cptInfo,
        success:function(data){
            console.log(data);
            checkCptCount(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}
function checkCptCount(data){
    var element = document.getElementById("cptInfoForm");
    element.style.display = "none";
    var dataType = data.dataType;
    var paperCount=document.getElementById("cptCount");
    if(dataType == "noData"){
        paperCount.innerText = "当前已提交竞赛项目数量为：0";
        return
    }else if(dataType == "hasData"){
        alert("录入成功!");
        var dataDetail = data.data;
        var len = dataDetail.length;
        paperCount.innerText = "当前已提交竞赛项目数量为：" + len + "";
        var table = document.getElementById("cptInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}
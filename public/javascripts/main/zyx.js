/**
 * Created by samsung2014 on 2017/2/17.
 */


function display_cxcy1() {
    var multiAuthors = document.getElementsByClassName("CXCYInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
        document.getElementById("CXCYInfoTableLeader").style.display = "none";
    }
}

function display_cxcy2() {
    var multiAuthors = document.getElementsByClassName("CXCYInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
    }
}

var CXCYCount=1;
function cxcy_add() {
    var element = document.createElement("tr");
    var node = document.createTextNode("组员");
    element.appendChild(node);
    element.setAttribute('class', "CXCYMember");
    CXCYCount++;
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.id="cxcy_member"+CXCYCount;
    element.appendChild(inp);
    x = document.getElementById("CXCYInfoTable");
    x.appendChild(element);
}
function cxcy_del() {
    var element = document.getElementById("CXCYInfoTable");
    var children = element.getElementsByClassName("CXCYMember");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}
//创建paper不需要新增节点（永远只有一篇在编辑区）
function createCXCY() {
    var element = document.getElementById("CXCYInfoForm");
    element.style.display = "";
}

//提交
function CXCYSubmit() {
    document.getElementById('CXCYInfo_submit').disabled ='disabled';
    var upload=document.getElementById('CXCYUpload');
    upload.innerText = "基本信息正在提交中";
    upload.style.color="red";
    var CXCYInfo = {};
    //获取数据==========================================================================================================
    //创新创业项目名称
    var projectName = document.getElementById("CXCYInfo_projectName").value;
    //立项年份
    var projectTime = document.getElementById("CXCYInfo_time").value;
    //项目级别：{national/municipal/school}
    var projectLevel = document.getElementById("CXCYInfo_level").value;
    //项目类别：{innovate/entrepreneurship}
    var projectSort = document.getElementById("CXCYInfo_sort").value;
    //姓名
    var studentName = document.getElementById("CXCYInfo_personName").value;
    //学号
    var studentID = localStorage.getItem("ID");
    //指导教师
    var teacherName = document.getElementById("CXCYInfo_teacher").value;
    //职务:{teamLeader/teammate}
    var duty = $("input[name='CXCYInfo_position']:checked").val();
    //组长
    var Leader = document.getElementById("cxcy_leader").value;
    //组员1
    var Member1 = document.getElementById("cxcy_member1").value;
    //组员2
    var Member2 = document.getElementById("cxcy_member2").value;
    //组员3
    var Member3 = document.getElementById("cxcy_member3").value;
    //组员4
    var Member4 = document.getElementById("cxcy_member4").value;
    //生成组员列表
    var MemberList = "";
    if (Member1 != "") {MemberList+=Member1};
    if (Member2 != "") {MemberList+= ";";MemberList+=Member2};
    if (Member3 != "") {MemberList+= ";";MemberList+=Member3};
    if (Member4 != "") {MemberList+= ";";MemberList+=Member4};

    //数据检查==========================================================================================================
    //先检查必填的内容
    if (projectName == "" || studentName == "" || studentID == "" || teacherName == "" || projectLevel == "" || projectSort == "" || projectTime == "") {
        alert("信息不完善，请补全!");
        return;
    }
    //再根据填写的内容进行检查
    if (duty == "teamLeader") {
        if (MemberList == "") {
            alert("信息不完善，请补全!");
            return;
        }
    } else {
        if (Leader == ""||MemberList == "") {
            alert("信息不完善，请补全!");
            return;
        }
    }
    //生成数据==========================================================================================================
    CXCYInfo.projectName = projectName;
    CXCYInfo.projectTime=projectTime;
    CXCYInfo.projectLevel = projectLevel;
    CXCYInfo.projectSort = projectSort;
    CXCYInfo.studentName = studentName;
    CXCYInfo.studentID = studentID;
    CXCYInfo.teacherName = teacherName;
    CXCYInfo.duty = duty;
    if (CXCYInfo.duty == "teamLeader") {
        CXCYInfo.Leader == studentName;
    } else {
        CXCYInfo.Leader = Leader;
    }
    CXCYInfo.MemberList = MemberList;


    //提交数据==========================================================================================================
    $.ajax({
        url: "/ajax/CXCYInfoSubmit",
        type: "POST",
        dataType: "json",
        data:CXCYInfo,
        success: function (data) {
            console.log(data);
            checkCXCYCount(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function checkCXCYCount(data){
    document.getElementById('CXCYInfo_submit').removeAttribute("disabled");
    var upload=document.getElementById('CXCYUpload');
    upload.innerText="";
    var element = document.getElementById("CXCYInfoForm");
    element.style.display = "none";
    var dataType = data.dataType;
    var paperCount=document.getElementById("CXCYCount");
    if(dataType == "noData"){
        paperCount.innerText = "当前已提交创新创业项目数量为：0";
        return
    }else if(dataType == "hasData"){
        alert("录入成功!");
        var dataDetail = data.data;
        var len = dataDetail.length;
        paperCount.innerText = "当前已提交创新创业项目数量为：" + len + "";
        var table = document.getElementById("CXCYInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}
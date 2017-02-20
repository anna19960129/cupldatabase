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
    element.setAttribute('class', "cptOtherMember");
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
    inp.id='cpt_member'+ paperCount;
    td2.appendChild(inp);

    element.appendChild(td1);
    element.appendChild(td2);

    //这里指定了在table的最后一行前面添加一行
    var table = document.getElementById("cptInfoTable");
    var lastLine = document.getElementById("cptInfoTableButton");
    table.children[0].insertBefore(element,lastLine);
}

function cpt_del() {
    var element = document.getElementById("cptInfoTable");
    var children = element.getElementsByClassName("cptOtherMember");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

function creatCpt(){
    var element = document.getElementById("cptInfoForm");
    element.style.display = "";
}


//提交竞赛
function cptSubmit(){
    var cptInfo = {};
    //获取数据==========================================================================================================
    //姓名学号
    var cptpersonName = document.getElementById("cptInfo_personName").value;
    var cptpersonID = document.getElementById("cptInfo_personID").value;
    //竞赛级别
    var cptlevel = document.getElementById("cptInfo_level").value;
    //竞赛名称
    var cptName = document.getElementById("cptInfo_name").value;
    //获奖时间
    var cpttime = document.getElementById("cpt_time").value;
    //获奖等级
    var cptgrade = document.getElementById("cpt_grade").value;
    //竞赛形式(cpt_single/cpt_multiple)
    var cptform = $("input[name='cpt_form']:checked").val();
    //个人
    var cptSingle = document.getElementById("cptSingle").value;



    //数据检查==========================================================================================================
    //先检查必填的内容
    if(cptpersonName == "" || cptpersonID ==""||cptlevel == ""||cptName == ""|| cpttime == ""|| cptgrade == ""){
        alert("信息不完善，请补全!");
    }
    //再根据填写的内容进行检查
    if(cptform == "cpt_single"){
        if(authorSingle == ""){
            alert("信息不完善，请补全!");
        }
    }else{
        if(firstAuthor == ""||coAuthorList.length == 0){
            alert("信息不完善，请补全!");
        }
    }
    //生成数据==========================================================================================================
    cptInfo.cptpersonName = cptpersonName;
    cptInfo.cptpersonID = cptpersonID;
    cptInfo.cptlevel = cptlevel;
    cptInfo.cptName= cptName;
    cptInfo.cpttime = cpttime;
    cptInfo. cptgrade=  cptgrade;


    if(cptInfo.cptform == "cpt_single"){

    }

    //提交数据==========================================================================================================
    $.ajax({
        url:"/ajax/cptInfoSubmit",
        type:"POST",
        dataType:"json",
        data:{paperInfo:cptInfo},
        success:function(data){
            console.log(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}
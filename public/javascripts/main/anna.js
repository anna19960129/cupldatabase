/**
 * Created by samsung2014 on 2017/2/17.
 */

function bI_PGM_show(){
    var pgm = document.getElementById("bI_postgraduate_major");
    if (pgm.value=="其他"){
        document.getElementById("bI_postgraduate_other_major").style.display="block";
    }
    else{
        document.getElementById("bI_postgraduate_other_major").style.display="none";
    }
}

function bI_D_show(){
    var D = document.getElementById("bI_doctor_major");
    if (D.value=="其他"){
        document.getElementById("bI_doctor_other_major").style.display="block";
    }
    else{
        document.getElementById("bI_doctor_other_major").style.display="none";
    }
}

function bI_PD_show(){
    var PD = document.getElementById("bI_post_doctor_major");
    if (PD.value=="其他"){
        document.getElementById("bI_post_doctor_other_major").style.display="block";
    }
    else{
        document.getElementById("bI_post_doctor_other_major").style.display="none";
    }
}

//ATTENTION!!
//函数命名法（驼峰命名法，和下划线命名法）
function enroltime() {
    var bI_enrol = document.getElementById("bI_enrol").value;
    var date1 = bI_enrol.slice(0, 4);
    var date3 = new Date();
    var date4 = date3.getFullYear() - date1;
    if (date4 < 4) {
        document.getElementById("basicInfoTable2").style.display = 'none';
    }
    else {
        document.getElementById("basicInfoTable2").style.display = '';
    }
}
function graduatetime(){
    var bI_enrol = document.getElementById("bI_enrol").value;
    var bI_graduate = document.getElementById("bI_graduate").value;
    var date1 = bI_enrol.slice(0, 4);
    var date2 = bI_graduate.slice(0, 4);
    var date5 = date2 - date1;
    if (date2 !=="null") {
        if ( date5 > 4 ){
            document.getElementById("bIno_graduate_reason").style.display = '';
        }
        else if ( date5 < 4) {
            alert("毕业时间填写错误");
        }
        else {
            document.getElementById("bIno_graduate_reason").style.display = 'none';
        }
    }
}




var KYXMInfoFormCount = 0;
function createKYXM(){
    //var a=document.createElement("form");
    //var b=document.getElementById("KYXMInfoForm");
    //var c= b.firstChild.cloneNode(true);
    //KYXMInfoFormCount++;
    //a.id="KYXMInfoForm"+KYXMInfoFormCount;
    //c.id= c.id+KYXMInfoFormCount;
    //if(c.childNodes.childNodes.id!==null){
    //    c.childNodes.childNodes.id=c.childNodes.childNodes.id+KYXMInfoFormCount;
    //}
    //a.appendChild(c);
    //b.appendChild(a);

    //变量的名字易读最好
    var form=document.createElement("form");
    var oriForm=document.getElementById("KYXMInfoForm");
    var table = oriForm.firstChild.cloneNode(true);
    KYXMInfoFormCount++;
    form.id="KYXMInfoForm"+KYXMInfoFormCount;
    table.id= table.id+KYXMInfoFormCount;
    var children = table.childNodes;
    /**
     * 遍历table的所有子元素，并进行赋值，把赋值操作单独写成了一个“renameDiv"函数
     * 是因为子元素中很可能还有子元素。为了保证每个元素都遍历完成，需要用到“递归”
     * 可以理解为在函数里还要吊用函数他本身，这样的话就能保证所有的元素都能遍历到
     * (如果感到递归难以理解，可以先跳过，用到的地方不多）
     */
    for(var i = 0;i<children.length;i++){
        renameDiv(children[i]);
    }
    function renameDiv(child){
        if(child.id != ""){
            child.id += KYXMInfoFormCount;
        }
        var children = child.childNodes;
        for(var i = 0;i<children.length;i++){
            renameDiv(children[i]);
        }
    }
    /**
     * 这里有个小问题需要注意：
     * 不要添加多个表单{form},你只需要添加{table}就好了，就是说
     */
    //form.appendChild(table);
    oriForm.appendChild(table);

}

function creatKYXM(){
    var element = document.getElementById("KYXMInfoForm");
    element.style.display = "";
}

//论文模块
var paperInfoFormCount = 0;
//设置独著
function display_paper1() {
    document.getElementById("paperInfo_tr_singleA").style.display = "";
    document.getElementById("paperInfo_tr_firstA").style.display = "none";
    var multiAuthors = document.getElementsByClassName("multiAuthorInput");
    for(var i = 0;i<multiAuthors.length;i++){
        var author_i = multiAuthors[i];
        author_i.style.display = "none";
    }
}
//设置合著
function display_paper2() {
    document.getElementById("paperInfo_tr_singleA").style.display = "none";
    document.getElementById("paperInfo_tr_firstA").style.display = "";
}
//显示作者列表（不填充第一作者）
function display_paper3() {
    var multiAuthors = document.getElementsByClassName("multiAuthorInput");
    for(var i = 0;i<multiAuthors.length;i++){
        var author_i = multiAuthors[i];
        author_i.style.display = "";

    }
}
//显示作者列表（填充第一作者）
function display_paper4() {
    var multiAuthors = document.getElementsByClassName("multiAuthorInput");
    for(var i = 0;i<multiAuthors.length;i++){
        var author_i = multiAuthors[i];
        author_i.style.display = "";
    }
}

var paperCount=1;
function paper_add1() {
    var element = document.createElement("table");
    var node = document.createTextNode("其他作者");
    element.appendChild(node);
    element.setAttribute('class', "baseStructTable");
    paperCount++;
    element.id='paperInfoTablePartMultipleFirstAuthorOtherAuthor'+ paperCount;
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.id='paperInfo_otherAuthors'+paperCount;
    element.appendChild(inp);

    x = document.getElementById("paperInfoTablePartMultipleFirstAuthor"+paperInfoFormCount);

    x.appendChild(element);
}

function paper_del1() {

    var element = document.getElementById("paperInfoTablePartMultipleFirstAuthor"+paperInfoFormCount);

    var children = element.getElementsByClassName("baseStructTable");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

function paper_add2() {
    var element = document.createElement("table");
    var node = document.createTextNode("其他作者");
    element.appendChild(node);
    element.setAttribute('class', "baseStructTable");
    paperCount++;
    element.id='paperInfoTablePartMultipleNotFirstAuthorOtherAuthor'+ paperCount;
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.id='paperInfo_otherAuthors'+paperCount;
    element.appendChild(inp);

    x = document.getElementById("paperInfoTablePartMultipleNotFirstAuthor"+paperInfoFormCount);

    x.appendChild(element);
}

function paper_del2() {
    var element = document.getElementById("paperInfoTablePartMultipleNotFirstAuthor"+paperInfoFormCount);

    var children = element.getElementsByClassName("baseStructTable");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

//创建paper不需要新增节点（永远只有一篇在编辑区）
function createPaper() {
    var element = document.getElementById("paperInfoForm");
    element.style.display = "";
}



//提交基本信息
function bISubmit(){
    var bIInfo = {};
    //获取数据==========================================================================================================
    //姓名
    var Name = document.getElementById("bIName").value;
    var ID= document.getElementById("bIId").value;
    //性别：{male/female}
    var gender = $("input[name='gender']:checked").val();
    //出生年月
    var birthday = document.getElementById("bI_birthday").value;
    //高考省份
    var province=document.getElementById("bI_province").value;
    //高考类别:{文科/理科}
    var gk_sort = $("input[name='gk_sort']:checked").val();
    //高考数学成绩
    var math = document.getElementById("bIgk_math").value;
    //高考英语成绩
    var english = document.getElementById("bIgk_english").value;
    //入学时间
    var enrol = document.getElementById("bI_enrol").value;
    //入学专业
    var enrol_major = document.getElementById("bI_enrol_major").value;
    //转专业：{转专业/未转专业}
    var change_major = $("input[name='change_major']:checked").val();
    //现专业
    var present_major= document.getElementById("bI_present_major").value;
    //双专业：{double_major/single_major}
    var double_major = $("input[name='double_major']:checked").val();
    //第二专业
    var second_major= document.getElementById("bI_second_major").value;
    //辅修：{辅修/未辅修}
    var minor = $("input[name='bI_minor']:checked").val();
    //辅修专业
    var minor_program= document.getElementById("bI_minor_program").value;
    //手机号
    var cellphone = document.getElementById("cellphone").value;
    // 微信号
    var weChat = document.getElementById("weChat").value;
    //邮箱
    var email = document.getElementById("email").value;
    //毕业时间
    var graduate = document.getElementById("bI_graduate").value;
    //未按时毕业原因
    var no_graduate_reason = document.getElementById("bIno_graduate_reason").value;
    //毕业论文分数
    var finalPaper = document.getElementById("bI_finalPaper").value;
    //毕业去向
    var afterGraduate = document.getElementById("bI_afterGraduate").value;
    //研究生就读院校
    var postgraduate = document.getElementById("bI_postgraduate").value;
    //研究生就读专业
    var postgraduate_major = document.getElementById("bI_postgraduate_major").value;
    var postgraduate_other_major=document.getElementById("bI_postgraduate_other_major").value;
    //博士就读院校
    var doctor = document.getElementById("bI_doctor").value;
    //博士就读专业
    var doctor_major = document.getElementById("bI_doctor_major").value;
    var doctor_other_major=document.getElementById("bI_doctor_other_major").value;
    //博士后就读院校
    var post_doctor = document.getElementById("bI_post_doctor").value;
    //博士后就读专业
    var post_doctor_major = document.getElementById("bI_post_doctor_major").value;
    var post_doctor_other_major=document.getElementById("bI_post_doctor_other_major").value;
    //工作单位
    var job = document.getElementById("bI_job").value;
    //工作单位类型
    var job_sort = document.getElementById("bI_job_sort").value;
    //工作部门
    var department = document.getElementById("bI_department").value;
    //工作部门偏向
    var department_sort = document.getElementById("bI_department_sort").value;
    //技术职务
    var tech_position = document.getElementById("bI_tech_position").value;
    //行政职务
    var administrative_function = document.getElementById("bI_administrative_function").value;

    //数据检查==========================================================================================================
    //先检查必填的内容
    if(Name == "" || ID ==""||gender == ""||birthday == ""||province == ""||gk_sort == ""||enrol == ""||change_major == ""||enrol_major == ""||double_major == ""||minor == ""||cellphone == ""||email == ""){
        alert("信息不完善，请补全!");
    }
    //再根据填写的内容进行检查
    if(change_major == "转专业"){
        if(present_major == ""){
            alert("信息不完善，请补全!");
        }
    }
    if(double_major == "double_major"){
        if(second_major == ""){
            alert("信息不完善，请补全!");
        }
    }
    if(minor == "辅修"){
        if(minor_program == ""){
            alert("信息不完善，请补全!");
        }
    }
    //生成数据==========================================================================================================
    bIInfo.Name = Name;
    bIInfo.ID = ID;
    bIInfo.gender=gender;
    bIInfo.birthday=birthday;
    bIInfo.province=province;
    bIInfo.gk_sort=gk_sort;
    bIInfo.math=math||"noData";
    bIInfo.english=english||"noData";
    bIInfo.enrol= enrol.slice(0,4);
    bIInfo.enrol_major=enrol_major;
    bIInfo.change_major=change_major;
    bIInfo.present_major=present_major;
    bIInfo.double_major=double_major;
    bIInfo.second_major=second_major;
    bIInfo.minor=minor;
    bIInfo.minor_program=minor_program;
    bIInfo.cellphone=cellphone;
    bIInfo.weChat=weChat||"noData";
    bIInfo.email=email;
    bIInfo.graduate=graduate.slice(0,4)||"noData";
    bIInfo.no_graduate_reason=no_graduate_reason||"noData";
    bIInfo.finalPaper=finalPaper||"noData";
    bIInfo.afterGraduate=afterGraduate;
    bIInfo.postgraduate=postgraduate||"noData";
    bIInfo.postgraduate_major=postgraduate_major;
    bIInfo.postgraduate_other_major=postgraduate_other_major||"noData";
    bIInfo.doctor=doctor||"noData";
    bIInfo.doctor_major=doctor_major;
    bIInfo.doctor_other_major=doctor_other_major||"noData";
    bIInfo.post_doctor=post_doctor||"noData";
    bIInfo.post_doctor_major=post_doctor_major;
    bIInfo.post_doctor_other_major=post_doctor_other_major||"noData";
    bIInfo.job=job||"noData";
    bIInfo.job_sort=job_sort;
    bIInfo.department=department||"noData";
    bIInfo.department_sort=department_sort;
    bIInfo.tech_position=tech_position||"noData";
    bIInfo.administrative_function=administrative_function||"noData";
    //提交数据==========================================================================================================
    $.ajax({
        url:"/ajax/bIInfoSubmit",
        type:"POST",
        dataType:"json",
        data:bIInfo,
        success:function(data){
            console.log(data);
            checkBasicInformation(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}
function checkBasicInformation(data) {
    var element = document.getElementById("basicInfoForm");
    element.style.display ="none";
    var dataType = data.dataType;
    var paperCount=document.getElementById("basicInfoCount");
    if(dataType == "noData"){
        paperCount.innerText = "基本信息未提交成功";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        paperCount.innerText = "基本信息提交成功";
        var table = document.getElementById("basicInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}

function createBasicInfo() {
    var element = document.getElementById("basicInfoForm");
    element.style.display = "";
}


//提交科研项目
function KYXMSubmit(){
    var KYXMInfo = {};
    //获取数据==========================================================================================================
    //项目名称
    var projectName = document.getElementById("KYXMInfo_projectName").value;
    //立项时间
    var time = document.getElementById("KYXMInfo_time").value;
    //项目级别
    var level = document.getElementById("KYXMInfo_level").value;
    //姓名
    var personName = document.getElementById("KYXMInfo_personName").value;
    //学号
    var personID = document.getElementById("KYXMInfo_personID").value;
    //教师姓名
    var teacher = document.getElementById("KYXMInfo_teacher").value;
    //数据检查==========================================================================================================
    //先检查必填的内容
    if(projectName == "" || time ==""|| level ==""|| teacher ==""||personName == ""||personID == ""){
        alert("信息不完善，请补全!");
    }

    //生成数据==========================================================================================================
    KYXMInfo.projectName = projectName;
    KYXMInfo.time = time;
    KYXMInfo.level = level;
    KYXMInfo.personName = personName;
    KYXMInfo.personID = personID;
    KYXMInfo.teacher = teacher;
    //提交数据==========================================================================================================
    $.ajax({
        url:"/ajax/KYXMInfoSubmit",
        type:"POST",
        dataType:"json",
        data:KYXMInfo,
        success:function(data){
            console.log(data);
            checkKYXMCount(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}
function checkKYXMCount(data){
    var dataType = data.dataType;
    var paperCount=document.getElementById("KYXMCount");
    if(dataType == "noData"){
        paperCount.innerText = "当前已提交科研项目数量为：0";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        paperCount.innerText = "当前已提交科研项目数量为：" + len + "";
        var table = document.getElementById("KYXMInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}
//提交论文
function paperSubmit(){
    var paperInfo = {};
    //获取数据==========================================================================================================
    //论文名称
    var paperName = document.getElementById("paperInfo_paperName").value;
    //论文名称
    var Name = document.getElementById("paperInfo_name").value;
    //论文名称
    var ID = document.getElementById("paperInfo_ID").value;
    //作者类型：{single/multiple}
    var authorType = $("input[name='paperInfo_authorType']:checked").val();
    //独著作者
    var authorSingle = document.getElementById("paperInfo_authorSingle").value;
    //是否为第一作者:{true/false}
    var isFirstAuthor = $("input[name='paperInfo_isFirstAuthor']:checked").val();
    //第一作者
    var firstAuthor = document.getElementById("paperInfo_firstAuthor").value;
    //合作者1
    var coAuthor1 = document.getElementById("paperInfo_coAuthor1").value;
    //合作者2
    var coAuthor2 = document.getElementById("paperInfo_coAuthor2").value;
    //合作者3
    var coAuthor3 = document.getElementById("paperInfo_coAuthor3").value;
    //合作者4
    var coAuthor4 = document.getElementById("paperInfo_coAuthor4").value;
    //生成合作者列表
    var coAuthorList = [];
    if(coAuthor1 != ""){coAuthorList+= coAuthor1};
    if(coAuthor2 != ""){coAuthorList+= ";";coAuthorList+=coAuthor2};
    if(coAuthor3 != ""){coAuthorList+= ";";coAuthorList+=coAuthor3};
    if(coAuthor4 != ""){coAuthorList+= ";";coAuthorList+=coAuthor4};
    //教师姓名
    var teacherName = document.getElementById("paperInfo_teacherName").value;
    //期刊名称
    var magazineName = document.getElementById("paperInfo_magName").value;
    //发表时间
    var publishTime = document.getElementById("paperInfo_time").value;

    //数据检查==========================================================================================================
    //先检查必填的内容
    if(paperName == "" ||Name == "" ||ID == "" || teacherName ==""||magazineName == ""||publishTime == ""){
        alert("信息不完善，请补全!");
        return;
    }
    //再根据填写的内容进行检查
    if(authorType == "single"){
        if(authorSingle == ""){
            alert("信息不完善，请补全!");
            return;
        }
    }else{
        if(isFirstAuthor == "true"){
            if(firstAuthor!==Name){
                alert("第一作者填写错误!");
                return;
            }
        }
        if(firstAuthor == ""||coAuthorList == ""){
            alert("信息不完善，请补全!");
            return;
        }
    }


    //生成数据==========================================================================================================
    paperInfo.paperName = paperName;
    paperInfo.Name = Name;
    paperInfo.ID = ID;
    paperInfo.authorType = authorType;
    if(paperInfo.authorType == "single"){
        paperInfo.authorSingle = authorSingle;
        paperInfo.isFirstAuthor = "noData";
        paperInfo.firstAuthor = "noData";
        paperInfo.coAuthorList = "noData";
    }else{
        paperInfo.authorSingle = "noData";
        paperInfo.isFirstAuthor = isFirstAuthor;
        paperInfo.firstAuthor = firstAuthor;
        paperInfo.coAuthorList = coAuthorList;
    }
    paperInfo.teacherName = teacherName;
    paperInfo.magazineName = magazineName;
    paperInfo.publishTime = publishTime;
    //提交数据==========================================================================================================
    $.ajax({
        url:"/ajax/paperInfoSubmit",
        type:"POST",
        dataType:"json",
        data:paperInfo,
        success:function(data){
            console.log(data);
            checkPaperCount(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkPaperCount(data){
    var dataType = data.dataType;
    var paperCount=document.getElementById("paperCount");
    if(dataType == "noData"){
        paperCount.innerText = "当前已提交论文数量为：0";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        paperCount.innerText = "当前已提交论文数量为：" + len + "";
        var table = document.getElementById("paperInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}

function addDataToTable(dataDetail,table){
    table.innerHTML = "";
    var tr;
    var title = dataDetail[0];
    if(!title)return;

    tr = document.createElement("tr");
    for(var i in title){
        var td = document.createElement("td");
        td.innerHTML = i;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    for(var i = 0;i<dataDetail.length;i++){
        var data_i = dataDetail[i];
        tr = document.createElement("tr");
        for(var d in data_i){
            var td = document.createElement("td");
            td.innerHTML = data_i[d];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

}
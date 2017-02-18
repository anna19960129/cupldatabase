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
        document.getElementById("paperInfoFirstAuthor").style.display = "none";
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


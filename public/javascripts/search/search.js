/**
 * Created by samsung2014 on 2017/2/26.
 */
function bISearch(){
    var bIInfoCon = {};
    var enrol_begin=document.getElementById("bI_enrol_begin").value;
    var enrol_stop=document.getElementById("bI_enrol_stop").value;
    var enrol_count=enrol_stop- enrol_begin;
    var enrol_major=document.getElementById("bI_enrol_major").value;
    var enrolTimeList ="";
    for(var i= 0;i<parseInt(enrol_count)+2;i++){
        var obj = parseInt(enrol_begin) + i;
        enrolTimeList += obj;
        if(obj>parseInt(enrol_stop)-1)break;
        if(enrolTimeList != ""){enrolTimeList+='","'}
    }
    bIInfoCon.enrolTimeList=enrolTimeList;
    bIInfoCon.enrol_major=enrol_major;
    $.ajax({
        url:"/ajax/bIInfoSearch",
        type:"POST",
        dataType:"json",
        data:bIInfoCon,
        success:function(data){
            checkBISuc(data);

        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkBISuc(data){
    var dataType = data.dataType;
    var showSpan = document.getElementById("searchResultShow1");
    if(dataType == "noData"){
        showSpan.innerText = "查询结果：没有查到相应的内容";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        showSpan.innerText = "查询结果：共找到" + len + "条数据";
        var table = document.getElementById("baseInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}
function cptSearch(){
    var cptInfoCon = {};
    var enrol_begin=document.getElementById("cpt_enrol_begin").value;
    var enrol_stop=document.getElementById("cpt_enrol_stop").value;
    var enrol_count=enrol_stop- enrol_begin;
    var enrol_major=document.getElementById("cpt_enrol_major").value;
    var enrolTimeList ="";
    for(var i= 0;i<parseInt(enrol_count)+2;i++){
        var obj = parseInt(enrol_begin) + i;
        enrolTimeList += obj;
        if(obj>parseInt(enrol_stop)-1)break;
        if(enrolTimeList != ""){enrolTimeList+='","'}
    }
    cptInfoCon.enrolTimeList=enrolTimeList;
    cptInfoCon.enrol_major=enrol_major;
    $.ajax({
        url:"/ajax/cptInfoSearch",
        type:"POST",
        dataType:"json",
        data:cptInfoCon,
        success:function(data){
            checkCptSuc(data);

        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkCptSuc(data){
    var dataType = data.dataType;
    var showSpan = document.getElementById("searchResultShow2");
    if(dataType == "noData"){
        showSpan.innerText = "查询结果：没有查到相应的内容";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        showSpan.innerText = "查询结果：共找到" + len + "条数据";
        var table = document.getElementById("cptInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}

function CXCYSearch(){
    var CXCYInfoCon = {};
    var enrol_begin=document.getElementById("CXCY_enrol_begin").value;
    var enrol_stop=document.getElementById("CXCY_enrol_stop").value;
    var enrol_count=enrol_stop- enrol_begin;
    var enrol_major=document.getElementById("CXCY_enrol_major").value;
    var enrolTimeList ="";
    for(var i= 0;i<parseInt(enrol_count)+2;i++){
        var obj = parseInt(enrol_begin) + i;
        enrolTimeList += obj;
        if(obj>parseInt(enrol_stop)-1)break;
        if(enrolTimeList != ""){enrolTimeList+='","'}
    }
    CXCYInfoCon.enrolTimeList=enrolTimeList;
    CXCYInfoCon.enrol_major=enrol_major;
    $.ajax({
        url:"/ajax/CXCYInfoSearch",
        type:"POST",
        dataType:"json",
        data:CXCYInfoCon,
        success:function(data){
            checkCXCYSuc(data);

        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkCXCYSuc(data){
    var dataType = data.dataType;
    var showSpan = document.getElementById("searchResultShow3");
    if(dataType == "noData"){
        showSpan.innerText = "查询结果：没有查到相应的内容";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        showSpan.innerText = "查询结果：共找到" + len + "条数据";
        var table = document.getElementById("CXCYInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}
function KYXMSearch(){
    var KYXMInfoCon = {};
    var enrol_begin=document.getElementById("KYXM_enrol_begin").value;
    var enrol_stop=document.getElementById("KYXM_enrol_stop").value;
    var enrol_count=enrol_stop- enrol_begin;
    var enrol_major=document.getElementById("KYXM_enrol_major").value;
    var enrolTimeList ="";
    for(var i= 0;i<parseInt(enrol_count)+2;i++){
        var obj = parseInt(enrol_begin) + i;
        enrolTimeList += obj;
        if(obj>parseInt(enrol_stop)-1)break;
        if(enrolTimeList != ""){enrolTimeList+='","'}
    }
    KYXMInfoCon.enrolTimeList=enrolTimeList;
    KYXMInfoCon.enrol_major=enrol_major;
    $.ajax({
        url:"/ajax/KYXMInfoSearch",
        type:"POST",
        dataType:"json",
        data:KYXMInfoCon,
        success:function(data){
            checkKYXMSuc(data);

        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkKYXMSuc(data){
    var dataType = data.dataType;
    var showSpan = document.getElementById("searchResultShow4");
    if(dataType == "noData"){
        showSpan.innerText = "查询结果：没有查到相应的内容";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        showSpan.innerText = "查询结果：共找到" + len + "条数据";
        var table = document.getElementById("KYXMInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}

function paperSearch(){
    var paperInfoCon = {};
    var enrol_begin=document.getElementById("paper_enrol_begin").value;
    var enrol_stop=document.getElementById("paper_enrol_stop").value;
    var enrol_count=enrol_stop- enrol_begin;
    var enrol_major=document.getElementById("paper_enrol_major").value;
    var enrolTimeList ="";
    for(var i= 0;i<parseInt(enrol_count)+2;i++){
        var obj = parseInt(enrol_begin) + i;
        enrolTimeList += obj;
        if(obj>parseInt(enrol_stop)-1)break;
        if(enrolTimeList != ""){enrolTimeList+='","'}
    }
    paperInfoCon.enrolTimeList=enrolTimeList;
    paperInfoCon.enrol_major=enrol_major;
    $.ajax({
        url:"/ajax/paperInfoSearch",
        type:"POST",
        dataType:"json",
        data:paperInfoCon,
        success:function(data){
            checkPaperSuc(data);

        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkPaperSuc(data){
    var dataType = data.dataType;
    var showSpan = document.getElementById("searchResultShow5");
    if(dataType == "noData"){
        showSpan.innerText = "查询结果：没有查到相应的内容";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        showSpan.innerText = "查询结果：共找到" + len + "条数据";
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
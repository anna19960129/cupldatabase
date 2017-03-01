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
    var showSpan = document.getElementById("searchResultShow");
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
    var showSpan = document.getElementById("searchResultShow");
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
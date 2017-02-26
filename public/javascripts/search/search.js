/**
 * Created by samsung2014 on 2017/2/26.
 */
function bISearch(){
    var bIInfo = {};
    var enrol=document.getElementById("bI_enrol").value;
    var major=document.getElementById("bI_enrol_major").value;
    bIInfo.enrol=enrol;
    bIInfo.major=major;
    $.ajax({
        url:"/ajax/bIInfoSearch",
        type:"POST",
        dataType:"json",
        data:{Name:"anna",gender:"m"},
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
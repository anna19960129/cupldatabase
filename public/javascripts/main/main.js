/**
 * Created by wgw on 2017/2/9.
 */

function exit(){
    $.ajax({
        url:"/ajax/logout",
        type:"GET",
        dataType:"json",
        data:{},
        success:function(data){
            console.log(data);
            window.location.href = "./login";
        },
        error:function(data){
            console.log(data);
        }
    });
};

setTimeout(function(){

    $("#menuIntro").click(function(){
        hideAndShow($("#introDiv"));
    });
    $("#menuBasicInfo").click(function(){
        hideAndShow($("#basicInfoDiv"));
    });
    $("#menuCpt").click(function(){
        hideAndShow($("#cptInfoDiv"));
    });
    $("#menuCXCY").click(function(){
        hideAndShow($("#CXCYInfoDiv"));
    });
    $("#menuKYXM").click(function(){
        hideAndShow($("#KYXMInfoDiv"));
    });
    $("#menuLWQK").click(function(){
        hideAndShow($("#paperInfoDiv"));
    });
},10);

function hideAndShow(obj){
    obj.siblings().css("display","none");
    obj.css("display","block");
}


function BasicInfoAppear(){
    var BasicInfoAppear= {};
    var ID=localStorage.getItem("ID");
    console.log(ID);
    BasicInfoAppear.ID=ID;
    $.ajax({
        url:"/ajax/BasicInfoAppearSubmit",
        type:"POST",
        dataType:"json",
        data:BasicInfoAppear,
        success:function(data){
            console.log(data);
            checkBasicInfoAppear(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkBasicInfoAppear(data){
    var dataType = data.dataType;
    var paperCount=document.getElementById("basicInfoCount");
    if(dataType == "noData"){
        paperCount.innerText = "未提交基本信息";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        paperCount.innerText = "基本信息提交成功";
        var table = document.getElementById("basicInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}


function cptAppear(){
    var cptAppear= {};
    var ID=localStorage.getItem("ID");
    cptAppear.ID=ID;
    $.ajax({
        url:"/ajax/cptAppearSubmit",
        type:"POST",
        dataType:"json",
        data:cptAppear,
        success:function(data){
            console.log(data);
            checkCptAppear(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkCptAppear(data) {
    var dataType = data.dataType;
    var paperCount=document.getElementById("cptCount");
    if(dataType == "noData"){
        paperCount.innerText = "当前已提交竞赛项目数量为：0";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        paperCount.innerText = "当前已提交竞赛项目数量为：" + len + "";
        var table = document.getElementById("cptInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}

function CXCYAppear(){
    var CXCYAppear= {};
    var ID=localStorage.getItem("ID");
    CXCYAppear.ID=ID;
    $.ajax({
        url:"/ajax/CXCYAppearSubmit",
        type:"POST",
        dataType:"json",
        data:CXCYAppear,
        success:function(data){
            console.log(data);
            checkCXCYAppear(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkCXCYAppear(data){
    var dataType = data.dataType;
    var paperCount=document.getElementById("CXCYCount");
    if(dataType == "noData"){
        paperCount.innerText = "当前已提交创新创业项目数量为：0";
        return
    }else if(dataType == "hasData"){
        var dataDetail = data.data;
        var len = dataDetail.length;
        paperCount.innerText = "当前已提交创新创业项目数量为：" + len + "";
        var table = document.getElementById("CXCYInfoShowTable");
        addDataToTable(dataDetail,table);
        return
    }
}

function KYXMAppear(){
    var KYXMAppear= {};
    var ID=localStorage.getItem("ID");
    KYXMAppear.ID=ID;
    $.ajax({
        url:"/ajax/KYXMAppearSubmit",
        type:"POST",
        dataType:"json",
        data:KYXMAppear,
        success:function(data){
            console.log(data);
            checkKYXMAppear(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkKYXMAppear(data){
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



function paperAppear(){
    var paperAppear= {};
    var ID=localStorage.getItem("ID");
    paperAppear.ID=ID;
    $.ajax({
        url:"/ajax/paperAppearSubmit",
        type:"POST",
        dataType:"json",
        data:paperAppear,
        success:function(data){
            console.log(data);
            checkPaperAppear(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}

function checkPaperAppear(data){
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
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



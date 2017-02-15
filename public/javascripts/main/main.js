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

//#basicInfoDiv{
//    display:none;
//}
//#cptInfoDiv{
//    display: none;
//}
//#CXCYInfoDiv{
//    display: none;
//}
//#KYXMInfoDiv{
//    display: none;
//}
//#paperInfoDiv{
//    display: none;
//}

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

function show(){
    var pgm = document.getElementById("bI_postgraduate_major");
    if (pgm.value=="其他"){
        document.getElementById("bI_postgraduate_other_major").style.display="block";
    }
}

function graduatetime(){
    var date1= document.getElementById("bI_enrol");
    var date2= document.getElementById("bI_graduate");
    var date3= new Date();
    var date4= date3.getFullYear()-date1.getFullYear();
    var date5= date2.getFullYear()-date1.getFullYear();
    if(date4 < 4){
        document.getElementById("basicInfoTable2").style.display='none';
    }
    if(date5 = 4){
        document.getElementById("bIno_graduate_reason").style.display='none';
    }
    if(date5 < 4){
        alert("毕业时间填写错误");
    }

}
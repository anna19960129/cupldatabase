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
    else{
        document.getElementById("bI_postgraduate_other_major").style.display="none";
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

var KYXMInfoFormCount=0;
function creatcpt(){
    var a=document.createElement("form");
    var b=document.getElementById("KYXMInfoForm");
    var c= b.firstChild.cloneNode(true);
    KYXMInfoFormCount++;
    a.id="KYXMInfoForm"+KYXMInfoFormCount;
    c.id= c.id+KYXMInfoFormCount;
    if(c.childNodes.childNodes.id!==null){
        c.childNodes.childNodes.id=c.childNodes.childNodes.id+KYXMInfoFormCount;
    }
    a.appendChild(c);
    b.appendChild(a);

}


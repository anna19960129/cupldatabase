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
        data:bIInfo,
        success:function(data){
            console.log(data);
        },
        error:function(data){
            console.log(data);
        }
    });
}
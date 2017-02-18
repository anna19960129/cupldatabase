/**
 * Created by samsung2014 on 2017/2/17.
 */

function cptShow(){
    var cpt = document.getElementById("cptInfo_name");
    if (cpt.value=="其他"){
        document.getElementById("cptInfo_name_other").style.display="block";
    }
    else{
        document.getElementById("cptInfo_name_other").style.display="none";
    }
}


function display_cpt1() {
    var multiAuthors = document.getElementsByClassName("cptInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
        document.getElementById("cptInfoTableLeader").style.display = "none";
    }
}
function display_cpt2() {
    var multiAuthors = document.getElementsByClassName("cptInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
    }
}
var cptCount=1;
function cpt_add() {
    var element = document.createElement("tr");
    var node = document.createTextNode("其他组员");
    element.appendChild(node);
    element.setAttribute('class', "cptOtherMember");
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    cptCount++;
    inp.id='cpt_member'+ paperCount;
    element.appendChild(inp);
    x = document.getElementById("cptInfoTable");
    x.appendChild(element);
}

function cpt_del() {
    var element = document.getElementById("cptInfoTable");
    var children = element.getElementsByClassName("cptOtherMember");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}


function creatCpt(){
    var element = document.getElementById("cptInfoForm");
    element.style.display = "";
}

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
    document.getElementById("cptInfoTableGroupLeader").style.display = "block";
    document.getElementById("cptInfoTableGroupMember").style.display = "none";
}
function display_cpt2() {
    document.getElementById("cptInfoTableGroupMember").style.display = "block";
    document.getElementById("cptInfoTableGroupLeader").style.display = "none";
}

function cpt_add1() {
    var element = document.createElement("table");
    var node = document.createTextNode("其他组员");
    element.appendChild(node);
    element.setAttribute('class', "baseStructTable")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("cptInfoTableGroupLeader");
    x.appendChild(element);
}

function cpt_del1() {
    var element = document.getElementById("cptInfoTableGroupLeader");
    var children = element.getElementsByClassName("baseStructTable");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

function cpt_add2() {
    var element = document.createElement("table");
    var node = document.createTextNode("其他组员");
    element.appendChild(node);
    element.setAttribute('class', "baseStructTable")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("cptInfoTableGroupMember");
    x.appendChild(element);
}

function cpt_del2() {
    var element = document.getElementById("cptInfoTableGroupMember");
    var children = element.getElementsByClassName("baseStructTable");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}


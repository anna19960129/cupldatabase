/**
 * Created by samsung2014 on 2017/2/17.
 */


function display_cxcy1() {
    document.getElementById("CXCYInfoTableLeader").style.display = "block";
    document.getElementById("CXCYInfoTableMember").style.display = "none";

}
function display_cxcy2() {
    document.getElementById("CXCYInfoTableLeader").style.display = "none";
    document.getElementById("CXCYInfoTableMember").style.display = "block";
}

function cxcy_add1() {
    var element = document.createElement("table");
    var node = document.createTextNode("组员");
    element.appendChild(node);
    element.setAttribute('class', "baseStructTable")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("CXCYInfoTableLeader");
    x.appendChild(element);
}
function cxcy_del1() {
    var element = document.getElementById("CXCYInfoTableLeader");
    var children = element.getElementsByClassName("baseStructTable");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

function cxcy_add2() {
    var element = document.createElement("table");
    var node = document.createTextNode("组员");
    element.appendChild(node);
    element.setAttribute('class', "baseStructTable")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("CXCYInfoTableMember");
    x.appendChild(element);
}
function cxcy_del2() {
    var element = document.getElementById("CXCYInfoTableMember");
    var children = element.getElementsByClassName("baseStructTable");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}


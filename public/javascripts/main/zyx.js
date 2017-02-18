/**
 * Created by samsung2014 on 2017/2/17.
 */


function display_cxcy1() {
    var multiAuthors = document.getElementsByClassName("CXCYInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
        document.getElementById("CXCYInfoTableLeader").style.display = "none";
    }
}

function display_cxcy2() {
    var multiAuthors = document.getElementsByClassName("CXCYInfoTableLM");
    for (var i = 0; i < multiAuthors.length; i++) {
        var author_i = multiAuthors[i];
        author_i.style.display = "";
    }
}

var CXCYCount=1;
function cxcy_add() {
    var element = document.createElement("tr");
    var node = document.createTextNode("组员");
    element.appendChild(node);
    element.setAttribute('class', "CXCYMember");
    CXCYCount++;
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.id="cxcy_member"+CXCYCount;
    element.appendChild(inp);
    x = document.getElementById("CXCYInfoTable");
    x.appendChild(element);
}
function cxcy_del() {
    var element = document.getElementById("CXCYInfoTable");
    var children = element.getElementsByClassName("CXCYMember");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}
function creatCXCY() {
    var element = document.getElementById("CXCYInfoForm");
    element.style.display = "";
}
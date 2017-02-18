/**
 * Created by samsung2014 on 2017/2/17.
 */
function display_paper1() {
    document.getElementById("papertext1").style.display = "block";
    document.getElementById("papertext2").style.display = "none";
}
function display_paper2() {
    document.getElementById("papertext2").style.display = "block";
    document.getElementById("papertext1").style.display = "none";
}

function display_paper3() {
    document.getElementById("papertext3").style.display = "block";
    document.getElementById("papertext4").style.display = "none";
}
function display_paper4() {
    document.getElementById("papertext4").style.display = "block";
    document.getElementById("papertext3").style.display = "none";
}

function paper_add1() {
    var element = document.createElement("p");
        var node = document.createTextNode("其他作者");
    element.appendChild(node);
    element.setAttribute('class', "otherauth")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("papertext3");
    x.appendChild(element);
}
function paper_del1() {
    var element = document.getElementById("papertext3");
    var children = element.getElementsByClassName("otherauth");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

function paper_add2() {
    var element = document.createElement("p");
    var node = document.createTextNode("其他作者");
    element.appendChild(node);
    element.setAttribute('class', "otherauth")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("papertext4");
    x.appendChild(element);
}
function paper_del2() {
    var element = document.getElementById("papertext4");
    var children = element.getElementsByClassName("otherauth");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

document.getElementById("papertext3").style.display = "none";
document.getElementById("papertext4").style.display = "none";

document.getElementById("papertext1").style.display = "none";
document.getElementById("papertext2").style.display = "none";


function display_cxcy1() {
    document.getElementById("cxcytext1").style.display = "block";
    document.getElementById("cxcytext2").style.display = "none";
}
function display_cxcy2() {
    document.getElementById("cxcytext2").style.display = "block";
    document.getElementById("cxcytext1").style.display = "none";
}

function cxcy_add1() {
    var element = document.createElement("p");
    var node = document.createTextNode("组员");
    element.appendChild(node);
    element.setAttribute('class', "member")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("cxcytext1");
    x.appendChild(element);
}
function cxcy_del1() {
    var element = document.getElementById("cxcytext1");
    var children = element.getElementsByClassName("member");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

function cxcy_add2() {
    var element = document.createElement("p");
    var node = document.createTextNode("组员");
    element.appendChild(node);
    element.setAttribute('class', "member")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("cxcytext2");
    x.appendChild(element);
}
function cxcy_del2() {
    var element = document.getElementById("cxcytext2");
    var children = element.getElementsByClassName("member");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

document.getElementById("cxcytext1").style.display = "none";
document.getElementById("cxcytext2").style.display = "none";

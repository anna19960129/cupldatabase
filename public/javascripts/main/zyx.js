/**
 * Created by samsung2014 on 2017/2/17.
 */


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

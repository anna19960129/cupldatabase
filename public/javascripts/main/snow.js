/**
 * Created by samsung2014 on 2017/2/17.
 */
function display_cpt4() {
    document.getElementById("cpt_text2").style.display = "none";
}
function display_cpt5() {
    document.getElementById("cpt_text2").style.display = "block";
}

function display_cpt6() {
    document.getElementById("cpt_text3").style.display = "block";
    document.getElementById("cpt_text4").style.display = "none";
}
function display_cpt7() {
    document.getElementById("cpt_text4").style.display = "block";
    document.getElementById("cpt_text3").style.display = "none";
}

function cpt_add1() {
    var element = document.createElement("p");
    var node = document.createTextNode("其他组员");
    element.appendChild(node);
    element.setAttribute('class', "othermember")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("cpt_text3");
    x.appendChild(element);
}

function cpt_del1() {
    var element = document.getElementById("cpt_text3");
    var children = element.getElementsByClassName("othermember");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

function cpt_add2() {
    var element = document.createElement("p");
    var node = document.createTextNode("其他组员");
    element.appendChild(node);
    element.setAttribute('class', "othermember")
    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    element.appendChild(inp);
    x = document.getElementById("cpt_text4");
    x.appendChild(element);
}

function cpt_del2() {
    var element = document.getElementById("cpt_text4");
    var children = element.getElementsByClassName("othermember");
    var lc = children[children.length - 1];
    element.removeChild(lc);
}

document.getElementById("cpt_text3").style.display = "none";
document.getElementById("cpt_text4").style.display = "none";

document.getElementById("cpt_text1").style.display = "none";
document.getElementById("cpt_text2").style.display = "none";
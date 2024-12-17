var overlay=document.getElementById("overlay")
var popup=document.getElementById("popup")
var addbtn=document.getElementById("addbtn")
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var input1=document.getElementById("input1")
var input2=document.getElementById("input2")
var input3=document.getElementById("input3")
addbtn.addEventListener("click",function(){
    popup.style.display="block"
    overlay.style.display="block"
});
function del(event){
    event.target.parentElement.remove()
}
var container=document.getElementById("container")
function add(){
    var addlist=document.createElement("div")
    addlist.setAttribute("class","div4")
    addlist.style.width="26%"
    addlist.style.backgroundcolor= "black"
    addlist.style.color="white"
    addlist.style.padding="15px"
    addlist.style.borderRadius= "5%"
    addlist.style.marginTop="7%"
    addlist.style.marginLeft= "3%"
    addlist.innerHTML="<h2>input1.textcontent</h2>"+"<h4>input2.textContent</h4>"
}
var btn3=document.getElementById("btn3")
btn3.addEventListener("click",function(event){
    event.preventDefault();
     popup.style.display="none"
    overlay.style.display="none"

})
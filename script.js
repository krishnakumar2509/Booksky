//select popup,overlay and button for insert into firstadd button
var popup=document.getElementById("popup");
var overlay=document.getElementById("overlay");
var firstadd=document.getElementById("firstadd");
firstadd.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})
//cancel button
var secdel=document.getElementById("secdel")
secdel.addEventListener("click",function(){
    overlay.style.display="none"
    popup.style.display="none"
})
//add button and select input values
var secadd=document.getElementById("secadd")
var container=document.querySelector(".container")
var bktitle=document.getElementById("bktitle")
var bkauthor=document.getElementById("bkauthor")
var descript=document.getElementById("descript")
secadd.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","samp")
    div.innerHTML=`<h2 style=" color: rgba(255, 80, 80);">${bktitle.value}</h2>
    <h4>${bkauthor.value}</h4>
    <p>${descript.value}</p>
    <button id="outdel" onclick="del(event)">delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})
//delete button
function del(event){
    event.target.parentElement.remove()
}

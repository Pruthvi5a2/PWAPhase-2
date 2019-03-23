var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for (i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.wedkitIndexedDB;
if(!idb in navigator){
  alert("Browser does not support");
}
var open=idb.open("storeData",1);
console.log("DATABASE CREATED")

open.onupgradeneeded=function(event){
  var request=event.target.result;
  request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error){
  console.log("error");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var store=transaction.objectStore("Formdata");
  var info=store.get(paramValue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data){
  var image=document.createElement("img");
  image.src="images/profile.svg";
  left.append(image);
  var line=document.createElement("hr");
  left.append(line);
  var name=document.createElement("h1");
  name.textContent=data.name;
    left.append(name);
  var role=document.createElement("h2");
  role.textContent=data.role;
    left.append(role);
  var email=document.createElement("h2");
  email.textContent=data.email;
    left.append(email);
  var pno=document.createElement("h2");
  pno.textContent=data.pno;
    left.append(pno);
    var obj=document.createElement("h2");
    obj.textContent="Career Objective";
    right.append(obj);
    var career=document.createElement("h3");
    career.textContent=data.career;
    right.append(career);
    var line=document.createElement("hr");
    right.append(line);
    var h2=document.createElement("h2");
    h2.textContent="Educational Details";
    right.append(h2);
    var tab=document.createElement("table");
    let row="";
    row +="<tr>"+"<th>"+"College"+"</th>"+
    "<th>"+"Degree"+"</th>"+
    "<th>"+"Branch"+"</th>"+
    "<th>"+"percentage"+"</th>"+
    "</tr>";
    for(i in data.education){
    row +="<tr>"+"<td>"+data.education[i].college +"</td>"+
    "<td>"+data.education[i].degree +"</td>"+
    "<td>"+data.education[i].branch+"</td>"+
    "<td>"+data.education[i].marks+"</td>"+
    "</tr>";
    tab.innerHTML=row;
    right.append(tab);
  }
  var line1=document.createElement("hr");
  right.append(line1);
  var title=document.createElement("h2");
  title.textContent="Skills";
  right.append(title);
  var skills=document.createElement("h3");
  skills.textContent=data.skills;
  right.append(skills);
}

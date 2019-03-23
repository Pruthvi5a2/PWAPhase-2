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
  var finalData=store.getAll();
  finalData.onsuccess=function(event){
    console.log(event.target.result);
    display(event.target.result);
  }
  }
  function display(data){
    var parent=document.querySelector(".parent");
    for (var i = 0; i < data.length; i++) {
      var child=document.createElement("div");
      child.classList.add("child");
      var image=document.createElement("img");
      image.src="images/profile.svg";
      image.alt=data[i].name;
      child.append(image);
      parent.append(child);
      var name=document.createElement("h2");
      name.textContent=data[i].name;
        child.append(name);
      var role=document.createElement("h2");
      role.textContent=data[i].role;
        child.append(role);
      var email=document.createElement("h2");
      email.textContent=data[i].email;
        child.append(email);
      var pno=document.createElement("h2");
      pno.textContent=data[i].pno;
        child.append(pno);


        var link=document.createElement("a");
        link.href="resume.html?id="+data[i].id;
        link.textContent="View Profile";
        child.append(link);

    }

 }

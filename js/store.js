function addData(){
  var role=document.querySelector("#role").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var pno=document.querySelector("#pno").value;
  var career=document.querySelector("#career").value;


  var degree1=document.querySelector("#degree1").value;
  var college1=document.querySelector("#college1").value;
  var branch1=document.querySelector("#branch1").value;
  var marks1=document.querySelector("#marks1").value;


  var degree2=document.querySelector("#degree2").value;
  var college2=document.querySelector("#college2").value;
  var branch2=document.querySelector("#branch2").value;
  var marks2=document.querySelector("#marks2").value;


  var degree3=document.querySelector("#degree3").value;
  var college3=document.querySelector("#college3").value;
  var branch3=document.querySelector("#branch3").value;
  var marks3=document.querySelector("#marks3").value;



  var skills=document.querySelector("#skills").value;


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
  store.put({
    name:name,
    career:career,
    email:email,
    role:role,
    pno:pno,
    education:[
      {
      degree:degree1,
      college:college1,
      branch:branch1,
      marks:marks1
    },
    {
      degree:degree2,
      college:college2,
      branch:branch2,
      marks:marks2
    },
    {
      degree:degree3,
      college:college3,
      branch:branch3,
      marks:marks3
    }
  ],
  skills:skills
});
window.open("index.html");
}
}

// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let message=document.getElementById("message").value.trim();

let result=document.getElementById("result");

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(name==""||email==""||message==""){

result.style.color="red";

result.innerHTML="All fields are required.";

return;

}

if(!email.match(emailPattern)){

result.style.color="red";

result.innerHTML="Enter a valid email.";

return;

}

result.style.color="green";

result.innerHTML="Form Submitted Successfully.";

document.getElementById("contactForm").reset();

});


// Dynamic ToDo List

function addTask(){

let input=document.getElementById("taskInput");

let task=input.value.trim();

if(task==="") return;

let li=document.createElement("li");

li.innerHTML=task+" <button class='remove'>Delete</button>";

document.getElementById("taskList").appendChild(li);

input.value="";

li.querySelector(".remove").onclick=function(){

li.remove();

};

}

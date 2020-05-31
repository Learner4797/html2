alert('HELLO');

window.prompt("sometext","Hi there");

var person = prompt("Please enter your name", "Ashish singh");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}

function resetted() {
alert("Form resetted")
}

function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  

if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}

else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
} 
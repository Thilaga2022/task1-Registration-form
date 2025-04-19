var form = document.getElementById("myform");
var nameinput = document.getElementById("nameinput");
var emailinput = document.getElementById("emailinput");
var password = document.getElementById("passwordinput");

form.addEventListener("submit", function(event) {
  event.preventDefault(); //  stops default form submission

  // Name validation
  if (nameinput.value.trim() === "") {
    alert("Please Enter Name");
    nameinput.focus(); 
    return;
  }

   // Email validation
   var email = emailinput.value.trim();
   var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!regex.test(email)) {
     alert("Please enter a valid email address.");
     emailinput.focus();
     return;
   }

  // Password validation
  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long, including symbols and numbers");
    password.focus();
    return;
  }

  // If all validations pass, navigate
  window.location.href = "submit.html";
});
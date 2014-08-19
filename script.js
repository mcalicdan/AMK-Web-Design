$(document).ready(function() {
  $("#name").keyup(function() {
    var feedback = $("#feedback");
      if (this.value.length < 2) {
        feedback.html("<p id='feedbackStuff'>Name must be 2 characters or more.</p>");
      } else {
        feedback.html("<p id='feedbackStuff'>Your name has been added to our records.</p>");
      };
  });
});

function checkemail(){
  var email = document.getElementById("emailfeedback");
  if (this.value.length < 2) {
    email.textContent = "You must submit a valid e-mail address";
  }
  else{
    email.textContent = "Your e-mail has been added to our records";
  }
}

var elemail = document.getElementById("email");
elemail.addEventListener("blur", checkemail, false);

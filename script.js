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
$(document).ready(function() {
  $("#email").keyup(function() {
    var emailfeedback = $("#emailfeedback");
      if (this.value.length < 2) {
        emailfeedback.html("<p id='feedback'>Your e-mail must be 2 characters or more.</p>");
      } else {
        emailfeedback.html("<p id='feedback'>Your e-mail has been added to our records.</p>");
      };
  });
});




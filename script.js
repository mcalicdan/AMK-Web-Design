function checkname() {                                          // Declare function
  var elMsg = document.getElementById("feedback");              // Get feedback element
  if (this.value.length < 2) {                                  // If name too short
    elMsg.textContent = "Name must be 2 characters or more";    // Set msg
  } else {                                                      // Otherwise
    elMsg.textContent = "Your name has been added to our records.";                                     // Clear msg
  }
}

var elname = document.getElementById("name");                   // Get name input
// When it loses focus call checkname()
elname.addEventListener("blur", checkname, false);

function checkemail(){
  var email = document.getElementByID("emailfeedback");
  if (this.value.length < 2){
    email.textContent = "You must submit a valid e-mail address";
  }
  else{
    email.textContent = "Your e-mail has been added to our records";
  }
}

var email = document.getElementByID("email");
email.addEventListener("blur", checkemail, false);

function checkname() {                                          // Declare function
  var elMsg = document.getElementById('feedback');              // Get feedback element
  if (this.value.length < 2) {                                  // If name too short
    elMsg.textContent = 'Name must be 2 characters or more';    // Set msg
  } else {                                                      // Otherwise
    elMsg.textContent = '';                                     // Clear msg
  }
}

var elname = document.getElementById('name');                   // Get name input
// When it loses focus call checkname()
elname.addEventListener('blur', checkname, false);

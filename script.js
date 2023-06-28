// Problem: Register a user after all the inputs are OK!
// [ ] be sure that no field are empty
// [ ] be sure that the passswords match
// Algo:
// a. get all the fields required (HTML)
const formEl = document.querySelector('form');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const passwordConfirmEl = document.querySelector('#password-confirm');
const messageEl = document.querySelector('#message');
const toastMessageEl = document.querySelector('#toast-message');
const fullNameEl = document.querySelector('#full-name');

// setTimeout(() => clearMessage(), 2000);

// sanity check of my DOM selection
// console.log(passwordConfirmEl)

// b. check if any of that is empty (if any this empty tell the user to fix it)
/// /// Event Handler ///////
formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  // console.log('edededed')
  // console.log(
  //   inputIsNotEmpty(fullNameEl.value)
  //   && inputIsNotEmpty(emailEl.value)
  //   && inputIsNotEmpty(passwordEl.value)
  //   && inputIsNotEmpty(passwordConfirmEl.value)
  // )

  clearMessage();
  //if one is one fields is empty, register user
  if (
    inputIsNotEmpty(fullNameEl.value, 'Full Name') &&
    inputIsNotEmpty(emailEl.value, 'Email') &&
    inputIsNotEmpty(passwordEl.value, 'Password field') &&
    inputIsNotEmpty(passwordConfirmEl.value, 'Password confirmation field') &&
    passwordMatch(passwordEl.value, passwordConfirmEl.value)
  ) {
    registerUser();
    loginUser(emailEl.value, passwordEl.value);
    // return;
  }
  // showMessage("There was an how dev team has been notified")
});

/// Helper Functions
/**
/* Check that an input value from the. HTML is not empty
 */

// Validation fns
function inputIsNotEmpty(inputValue, fieldName = 'Input') {
  if (inputValue === '') {
    showMessage(`${fieldName} is empty. Fix it!!!!`);
    return false;
  }
  return true;
}

function passwordMatch(pwdOne, pwdTwo) {
  if (pwdOne !== pwdTwo) {
    showMessage('Password do not match. Fix');
    return false;
  }
  return true;
}
// END: Validation functions

// View
function showMessage(msg, msgDom = messageEl) {
  msgDom.innerHTML = `<p>${msg}</p>`;
}

function clearMessage(msgDom = messageEl) {
  msgDom.innerHTML = '';
}
//END: View

// Authentication
function registerUser() {
  // user registration logic
  showMessage('User is now register ✅');
}

/**
 * Login user logic
 */
function loginUser(email, password) {
  // console.log(email, password);
  // console.log('login user....');

  // while the backend is loading
  showMessage(
    '<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif">'
  );

  // Call the backend
  setTimeout(function(){
    // when that is done, redirect to https://google.com
    window.location = 'https://www.google.com';
  }, 2000);
}
// END: Authentication

// c. [after check b] check if the password fields match
// d. If b is OK, and c is OK, register the user

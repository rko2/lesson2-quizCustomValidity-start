/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */

submit.onclick = function () {
  if (firstPasswordInput.value != secondPasswordInput.value) {
    secondPasswordInput.setCustomValidity("The passwords should match.")
  }
  if (firstPasswordInput.value.length < 16 | secondPasswordInput.value.length < 16) {
    secondPasswordInput.setCustomValidity("The password must be longer than 16 characters.")
  }
  if (firstPasswordInput.value.length > 100 | secondPasswordInput.value.length > 100) {
    secondPasswordInput.setCustomValidity("The password must be shorter than 100 characters.")
  }
  if (!firstPasswordInput.value.match(/[\!\@\#\$\%\^\&\*]/g) | !secondPasswordInput.value.match(/[\!\@\#\$\%\^\&\*]/g)) {
    firstPasswordInput.setCustomValidity("The password must contain a symbol.")
  }
  if (!firstPasswordInput.value.match(/[0-9]/g) | !secondPasswordInput.value.match(/[0-9]/g)) {
    firstPasswordInput.setCustomValidity("The password must contain a number.")
  }
  if (!firstPasswordInput.value.match(/[a-z]/g) | !secondPasswordInput.value.match(/[a-z]/g)) {
    firstPasswordInput.setCustomValidity("The password must contain a lowercase letter.")
  }
  if (!firstPasswordInput.value.match(/[A-Z]/g) | !secondPasswordInput.value.match(/[A-Z]/g)) {
    firstPasswordInput.setCustomValidity("The password must contain an uppercase letter.")
  }
};

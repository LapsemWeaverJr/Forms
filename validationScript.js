// JavaScript code for form validation
// Prevent form from submitting

	// Retrieve the input field value

	// Regular expression pattern for alphanumeric input

	// Check if the input value matches the pattern

		// Valid input: display confirmation and submit the form

		// Invalid input: display error message





document.getElementsByTagName('button')[0].addEventListener('click', validateForm);


function alphanumericValidator(stringToCheck) {
	const nonAlphanumericPattern = /[^\w]|_/g;
	if (stringToCheck.match(nonAlphanumericPattern)) {
		return false;
	} else {
		return true;
	}
}

function validateForm() {
	var submittedString = document.forms["myForm"]["inputField"].value;
	event.preventDefault();
	if (alphanumericValidator(submittedString)) {
		document.getElementById("myForm").submit();
		alert('Yep, that\'s an alphanumeric string indeed!')
	} else {
		alert('Hey, your submitted string isn\'t totally alphanumeric!');
	}
}


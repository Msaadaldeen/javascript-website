'use strict';

const submitBtn = document.querySelector('#submitBtn');
//const globalErrors = [];
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const agbBtn = document.querySelector('.agbBtn');
	const errors = {};
	if (agbBtn.name === 'agbs') {
		const errorField = document.querySelector('span[data-field="agbs"]');

		delete errors['agbs'];

		if (!agbBtn.checked) {
			errors['agbs'] = 'AGB muss bestätigt werden';
		}

		errorField.innerText = errors[agbBtn.name] || '';
	}
});

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
	input.addEventListener('focusout', (e) => {
		validate(e);
	});
});

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

const validatePhone = (phone) => {
	return String(phone)
		.toLowerCase()
		.match(
			/( |^|>)((((\+|00)[0-9]{2} ?(\(0\))?)|0)([0-9]{2}-? ?[0-9]{7})|([0-9]{3}-? ?[0-9]{6})|([0-9]{1}-? ?[0-9]{8}))( |$|<)/gi
		);
};

function validate(e) {
	const errors = {};

	inputs.forEach((input) => {
		if (e.target.name === 'firstName') {
			const errorField = document.querySelector('span[data-field="firstName"]');

			if (isEmpty(e.target)) {
				errors['firstName'] = 'Bitte füllen Sie das Feld aus!';
				errorField.innerText = 'Bitte füllen Sie das Feld aus!';
				globalErrors.push(e.target);
			} else {
				errorField.innerText = '';
			}
		}

		if (e.target.name === 'lastName') {
			const errorField = document.querySelector('span[data-field="lastName"]');

			if (isEmpty(e.target)) {
				errors['lastName'] = 'Bitte füllen Sie das Feld aus!';
				errorField.innerText = 'Bitte füllen Sie das Feld aus!';
			} else {
				errorField.innerText = '';
			}
		}

		if (e.target.name === 'email') {
			const errorField = document.querySelector('span[data-field="email"]');

			if (isEmpty(e.target)) {
				errors['email'] = 'Bitte füllen Sie das Feld aus!';
				errorField.innerText = 'Bitte füllen Sie das Feld aus!';
			} else {
				const isValidEmail = validateEmail(e.target.value) !== null;

				if (!isValidEmail) {
					errors['email'] = 'E-Mail Adresse ist invalide!';
					errorField.innerText = 'E-Mail Adresse ist invalide!';
				} else {
					errorField.innerText = '';
				}
			}
		}

		if (e.target.name === 'password') {
			const errorField = document.querySelector('span[data-field="password"]');

			delete errors[e.target.name];

			if (isEmpty(e.target)) {
				errors['password'] = 'Bitte füllen Sie das Feld aus!';
			} else if (e.target.value.length <= 7) {
				errors['password'] = 'Passwort muss mindestens 8 Zeichen sein!';
			} else if (!'ABCDEFGHIJKLMNIOPQRSTUVXYZ'.split('').includes(e.target.value[0])) {
				errors['password'] = 'Passwort muss mit Großbuchstaben anfangen';
			}

			errorField.innerText = errors[e.target.name] || '';
		}

		if (e.target.name === 'phone') {
			const errorField = document.querySelector('span[data-field="phone"]');

			delete errors['phone'];

			if (isEmpty(e.target)) {
				errors['phone'] = 'Bitte füllen Sie das Feld aus!';
			} else if (e.target.value.length <= 5) {
				errors['phone'] = 'Es muss mindestens 6 Zeichen sein!';
			} else if (validatePhone(e.target.value) === null) {
				errors['phone'] = 'invalide Telefonnummer!';
			}

			errorField.innerText = errors[e.target.name] || '';
		}
	});

	return Object.keys(errors).length === 0;
}

function isEmpty(input) {
	return input.value.length === 0;
}

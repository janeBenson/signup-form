const helpText = document.querySelector('#pw-help-text')
const form = document.querySelector('form')

function validatePasswords() {
	const pw1 = document.querySelector('#password').value
	const pw2 = document.querySelector('#confirm-password').value
	if (!pw1 && !pw2) {
		return false
	}
	if (pw1 !== pw2) {
		helpText.style.display = 'block'
		return false
	} else {
		helpText.style.display = 'none'
		return true
	}
}

function handleSubmit(e) {
	e.preventDefault()
	if (validatePasswords()) {
		form.submit()
	}
}

form.addEventListener('submit', handleSubmit)

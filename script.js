const helpText = document.querySelector('#pw-help-text')
const form = document.querySelector('form')

function displayEl(el) {
	el.style.display = 'block'
}
function hideEl(el) {
	el.style.display = 'none'
}
function addClass(el, className) {
	el.classList.add(className)
}
function removeClass(el, className) {
	el.classList.remove(className)
}

function validatePasswords() {
	const pw1 = document.querySelector('#password')
	const pw2 = document.querySelector('#confirm-password')
	if (!pw1.value && !pw2.value) {
		return false
	}
	if (pw1.value !== pw2.value) {
		displayEl(helpText)
		addClass(pw1, 'invalid')
		addClass(pw2, 'invalid')
		return false
	} else {
		hideEl(helpText)
		removeClass(pw1, 'invalid')
		removeClass(pw2, 'invalid')

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

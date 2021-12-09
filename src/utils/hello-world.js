module.exports = function (subject) {
	console.log('Hello ' + subject)
}

function login() {
	console.log('hello kitty joe')
}
console.log('hi')

module.exports = {
	login: login,
}

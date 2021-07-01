export default class User {
	constructor(username, email, password, firstName, lastName, confirmPassword) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.confirmPassword = confirmPassword;
	}
}

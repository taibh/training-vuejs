import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

class AuthService {
	login(user) {
		return axios
			.post(`${API_URL}/login`, {
				username: user.username,
				password: user.password,
			})
			.then((response) => {
				if (response.token) {
					localStorage.setItem("user", JSON.stringify(response));
				}

				return response;
			});
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(user) {
		return axios.post(`${API_URL}/register`, {
			username: user.username,
			password: user.password,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			confirmPassword: user.confirmPassword,
		});
	}
}

export default new AuthService();

import axios from "axios";
const API_URL = "http://localhost:3000";
class AuthService {
  login(user) {
    return axios
      .post(API_URL + "", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();

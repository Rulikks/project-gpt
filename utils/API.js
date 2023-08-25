import request from "./request";
import Global from "./global";

async function login(email, password) {
  const { token } = await request
    .post("/auth/login", {
      email,
      password,
    })
    .then((res) => res.data);
  Global.setToken(token);
  return token;
}

export default {
  login,
};

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

async function leave() {
  await request.post("/auth/leave");
  Global.setToken(null);
}

export default {
  login,
  leave,
};

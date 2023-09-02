import request from "./request";
import Global from "./global";

async function login(email, password) {
  const { token } = await request
    .post("/auth/login", {
      email,
      password,
    })
    .then((res) => res.data);
  if(token) Global.setToken(token);
  return token;
}

async function register(email, username, password) {
  const { token } = await request
    .post("/auth/register", {
      email,
      username,
      password,
    })
    .then((res) => res.data);
  if(token) Global.setToken(token);
  return token;
}

async function myProfile() {
  const token = await Global.token;
  const profile = await request
    .post("/user/@me", {}, { headers: { Authorization: token } })
    .then((res) => res.data);
  return profile;
}

async function getConversation() {
  const token = await Global.token;
  const conversations = await request
    .get("/conversation", { headers: { Authorization: token } })
    .then((res) => res.data);
  return conversations;
}

async function deleteConversation(conversationId) {
  const token = await Global.token;
  const conversations = await request
    .delete(`/conversation/${conversationId}`, {
      headers: { Authorization: token },
    })
    .then((res) => res.data);
  return conversations;
}

async function getConversationMessages(conversationId) {
  const token = await Global.token;
  const conversations = await request
    .get(`/conversation/${conversationId}/messages`, {
      headers: { Authorization: token },
    })
    .then((res) => res.data);
  return conversations;
}

async function createConversationMessage(conversationId, content) {
  const token = await Global.token;
  const conversations = await request
    .post(
      `/conversation/messages`,
      { content, conversationId },
      { headers: { Authorization: token } }
    )
    .then((res) => res.data);
  return conversations;
}

async function leave() {
  Global.removeToken();
}

export default {
  register,
  login,
  leave,
  myProfile,
  conversation: {
    list: getConversation,
    delete: deleteConversation,
    messages: {
      list: getConversationMessages,
      create: createConversationMessage,
    },
  },
};

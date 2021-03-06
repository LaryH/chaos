import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store/store";

const server = axios.create({
  baseURL: "/api",
  timeout: 20000,
  // headers:
});

server.interceptors.request.use((config) => {
  //把用户的临时身份标识添加每次请求的请求头中
  let userTempId = store.state.user.userTempId;
  config.headers.userTempId = userTempId;

  //把登录后的标识token也添加到请求头中
  let token = store.state.user.userInfo.token;
  if (token) {
    config.headers.token = token;
  }
  
  NProgress.start();
  return config;
});

server.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res.data;
  },
  (err) => {
    NProgress.done();
    alert(err.message);
    return new Promise();
  }
);

export default server;

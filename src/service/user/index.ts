import { request } from "../index";

export const Login = (code: string) => {
  return request({
    url: "/user/Login",
    method: "POST",
    data: { code },
    showToast: true,
  });
};
